import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next'


import Modal from "react-modal";
import { getVideoData } from "@/lib/video.lib";
import { ClipData } from "@/utils/types";
import Head from "next/head";
import { addWatchedVideo } from "@/lib/hasura.lib";

Modal.setAppElement("#__next"); //use react portal to make modal sibling of root 

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    "clip-id": 'TKCnMJEbF7Y',
                },
            },
        ],
        fallback: true, // false or "blocking"
    }
}

export const getStaticProps: GetStaticProps<{ videoData: ClipData | undefined }, { [key: string]: string }> = async ({ params }) => {
    let videoData: ClipData | undefined;
    if (params && params['clip-id']) {
        videoData = await getVideoData(params['clip-id']);
    }
    if (!videoData) return { //if data not found (meaning wrong id) - redirect to homepage 
        props: { videoData },
        redirect: {
            destination: '/',
        }
    }
    return { props: { videoData } }
}

type ClipViewerProps = {
    videoData: ClipData | undefined
}

const ClipViewer = ({ videoData }: ClipViewerProps) => {
    const router = useRouter();
    const [liked, setLiked] = useState(false);
    // const [closing, setClosing] = useState(true);
    let closing = false;

    const closeModal = () => {
        if (!closing) {
            closing = true;
            router.back();
        }
    }

    if (videoData === undefined) { // in case (should not happen) when we are still here with no data
        // closeModal();
        return; // just so TS gets it ;) 
    }

    const { id, title, description, published, statistics } = videoData;

    useEffect(() => {
        async function setAsWatched() {
            const response = await fetch("/api/watched", {
                method: "POST",
                body: JSON.stringify(videoData)
            })
        }
        async function checkLiked() {
            const response = await fetch("/api/liked", {
                method: "POST",
                body: JSON.stringify({
                    body: videoData
                })
            })
            const data = await response.json();
            if (data["data"]["youflix_user_videos"][0]) {
                const dat = data["data"]["youflix_user_videos"][0];
                setLiked(dat.liked);
            }
        }
        setAsWatched();
        checkLiked();
    }, []);

    const toggleLike = async (like: boolean) => {
        setLiked(like);
        const response = await fetch("/api/liked", {
            method: "POST",
            body: JSON.stringify({
                body: videoData,
                like
            })
        })
    }

    return <>
        <Modal
            isOpen={true}
            contentLabel="Minimal Modal Example"
            onRequestClose={closeModal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            className="bg-gray-600 p-2 md:p-5  relative w-full md:w-3/4 shadow-xl rounded-md max-h-screen overflow-auto"
            overlayClassName="absolute inset-0 flex justify-center items-center md:p-8 p-2 bg-gray-700"
        >
            <iframe id="player"

                allowFullScreen
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${id}`}

            ></iframe>
            <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>&#x2715;</button>
            <div className="my-4">
                <div className="flex gap-3 items-center">
                    <h1 className="text-xl my-4 font-bold">{title}</h1>
                    {!liked && <button className="text-xl border-2 border-red-600 rounded-full w-8 h-8 aspect-square " onClick={() => toggleLike(true)}>&#9825;</button>}
                    {liked && <button className="text-xl border-2 border-red-600 rounded-full w-8 h-8 aspect-square " onClick={() => toggleLike(false)}>&#9829;</button>}
                </div>
                <div className="flex gap-4 justify-start items-center flex-col md:flex-row">
                    <p className="max-h-60 overflow-auto break-all pr-2">{description}</p>
                    <div className=" gap-2  my-4 w-4/5">
                        <h2 className="font-bold">Statistics</h2>
                        <span>Publish date:</span>
                        <br />
                        <span>{new Date(published).toLocaleDateString()}</span>
                        <br />
                        <span>Views:</span>
                        <br />
                        <span>{statistics?.viewCount}</span>
                        <br />
                        <span>Likes:</span>
                        <br />
                        <span>{statistics?.likeCount}</span>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default ClipViewer;
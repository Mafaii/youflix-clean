import Header from "@/components/header/header.component"
import { GetServerSideProps } from "next"
import { VideoLib } from "."
import { convertToClipData, getLikedVideos, getWatchedVideos } from "@/lib/hasura.lib"
import { ClipData } from "@/utils/types"
import ClipImage, { ClipImageSize } from "@/components/clip-image/clip-image.component"
import Link from "next/link"

interface MyVideosProps {
    myVideos: ClipData[] | []
}

export const getServerSideProps: GetServerSideProps<MyVideosProps> = async (context) => {
    if (!context.req.cookies["token"]) { //if not logged move user to login page    
        return {
            redirect: { destination: "/login" },
            props: { myVideos: [] }
        }
    }

    const token = context.req.cookies["token"];


    const myVideos = await getLikedVideos(token);
    if (myVideos["data"]["youflix_user_videos"]) {
        const test = myVideos["data"]["youflix_user_videos"];
        const videos = test.map(convertToClipData)
        return {
            props: {
                myVideos: videos,
            }
        }

    }

    return {
        props: {
            myVideos: [],
        }
    }
}


const MyVideos = ({ myVideos }: MyVideosProps) => {



    return <>
        <Header />
        <div className="relative  p-4 

        
        md:top-12">
            <h4 className="text-xl font-bold tracking-wider mb-3 ">Your Videos</h4>
            <div className="flex gap-8 width-100 overflow-y-auto overflow-x-hidden max-w-full py-4 flex-wrap">
                {myVideos && myVideos.map((vid, i) => (
                    <Link
                        href={`viewer/${vid.id}`}
                        key={vid.id}
                        className={`flex-1 transition relative hover:scale-125 hover:z-30  clip-image-container ${i === 0 || i === myVideos.length - 1 ? "origin-bottom-left" : ""}`}>
                        <ClipImage size={ClipImageSize.small} url={vid.imageUrl} alt={vid.title} />
                        <div className="
                        absolute inset-0 flex text-white justify-center items-center 
                        p-4
                        bg-gradient-to-b from-transparent to-black 
                        clip-image-container-info">
                            {vid.title}
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    </>
}

export default MyVideos
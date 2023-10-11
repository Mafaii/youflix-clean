import { NextApiRequest, NextApiResponse } from "next";
import { ClipData } from "@/utils/types";
import { addWatchedVideo, getVideoByID, likeVideo, unlikeVideo } from "@/lib/hasura.lib";

export default async function likedVideo(request: NextApiRequest, response: NextApiResponse) {

    if (request.method !== "POST") return response.status(405).json({ error: "Incorrect Method" });
    if (!request.cookies["token"]) return response.status(400).json({ error: "User is not logged it" });
    const bodyWhole = JSON.parse(request.body);


    const like = bodyWhole.like;

    const body = bodyWhole.body;
    if ((body as ClipData).id) {
        const token = request.cookies["token"];
        let res;


        if (like === undefined) {
            res = await getVideoByID(token, body.id);

        } else {
            res = like ? await likeVideo(token, body) : await unlikeVideo(token, body);
        }


        if (res["errors"]) {
            return response.status(500).json({ error: "Error on server side" });
        }
        return response.status(200).json(res);
    }
    return response.status(400).json({ error: "incorrect body" });

}
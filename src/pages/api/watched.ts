import { NextApiRequest, NextApiResponse } from "next";
import { ClipData } from "@/utils/types";
import { addWatchedVideo } from "@/lib/hasura.lib";

export default async function addVideoAsWatched(request: NextApiRequest, response: NextApiResponse) {

    if (request.method !== "POST") return response.status(405).json({ error: "Incorrect Method" });
    if (!request.cookies["token"]) return response.status(400).json({ error: "User is not logged it" });
    const body = JSON.parse(request.body);
    if ((body as ClipData).id) {
        const token = request.cookies["token"];
        const res = await addWatchedVideo(token, body);

        if (res["errors"]) {
            if (res["errors"]["message"] === "Uniqueness violation. duplicate key value violates unique constraint \"youflix_user_videos_issuer_vid_id_key\"") {
                //meaning it was added so we just say ok
                return response.status(202).json({ ok: "ok" });
            }
            return response.status(500).json({ error: "Error on server side" });
        }
        return response.status(200).json({ ok: "ok" });
    }
    return response.status(400).json({ error: "incorrect body" });

}
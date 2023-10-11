import { NextApiRequest, NextApiResponse } from "next";
import { magicAdmin } from "../../lib/magic-admin";
import { createTokenCookie } from "@/lib/cookie";
import { createTokenData } from "@/lib/hasura.lib";
import { signToken } from "@/lib/jwt.lib";
import { RPCError } from "magic-sdk";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    //it should be post as we want to pass token (we also cen check headers but anyway it whould be POST)
    if (req.method !== "POST") return res.status(405).json({ error: "Wrong Method, POST only" });
    const magic = await magicAdmin();
    if (!magic) return res.status(500).json({ error: "Error on server side" });
    try {
        if (!req.headers.authorization) return res.status(400).json({ error: "No Token in Authentication Header" });
        //not rly needed if token is send as body but lets be explicit 
        const didToken = magic.utils.parseAuthorizationHeader(req.headers.authorization);

        //validate token ( this method throws error if not valid etc.)
        await magic.token.validate(didToken);
        ///so if we arrived here token is valid
        // get metadata
        const meta = await magic.users.getMetadataByToken(didToken);
        // create tokenData
        const tokenData = createTokenData(meta);
        //sign token
        const signedToken = signToken(tokenData);
        //create and set cookie with token
        createTokenCookie(signedToken, res);
        return res.status(200).json({ metadata: meta });
    } catch (error) {
        console.log("some problem? ", error);
        if (error instanceof RPCError) {
            console.log("Error on Magic side RPCError" + error);
        }
        res.status(500).json({ error: (error as { message: string }).message });
    }

}

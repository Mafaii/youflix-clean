import { removeTokenCookie } from "@/lib/cookie";
import { decodeToken, verifyToken } from "@/lib/jwt.lib";
import { magicAdmin } from "@/lib/magic-admin";
import { HasuraToken } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function logout(request: NextApiRequest, response: NextApiResponse) {

    //TODO: check if req has cookie with token, if no then user was not logged so no need to reset token - still it will not change anything 
    if (!request.cookies["token"]) return response.status(400).json({ error: "User is not logged in" });
    //logout from magic api too
    const token = request.cookies["token"];
    const magic = await magicAdmin();
    if (!magic) return response.status(500).json({ error: "Error on Server." })
    if (!verifyToken(token)) return response.status(400).json({ error: "Token could not be verified. It contains errors" });
    //decode token
    const tokenData = decodeToken(token) as HasuraToken;
    if (!tokenData.issuer) return response.status(400).json({ error: "Token could not be verified. It contains errors" });
    //logout user by magic
    magic.users.logoutByIssuer(tokenData.issuer);
    //essentialy we want to remove cookie 
    removeTokenCookie(response);
    return response.status(200).json({ message: "ok" });
}
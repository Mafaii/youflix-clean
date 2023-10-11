import cookie from "cookie";
import { NextApiResponse } from "next";

const MAX_AGE = 7 * 24 * 60 * 60;

export const createTokenCookie = (token: string, response: NextApiResponse) => {
    const tokenCookie = cookie.serialize("token", token, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000), //meaning now + 7 days in seconds * 1000 to get ms (which Date.now() returns)
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
    });
    response.setHeader("Set-Cookie", tokenCookie);
}

export const removeTokenCookie = (response: NextApiResponse) => {
    const val = cookie.serialize("token", "", {
        maxAge: -1,
        path: "/",
    });

    response.setHeader("Set-Cookie", val);
};
import jwt from 'jsonwebtoken'

const JWT_SIGN_SERCET = process.env.JWT_SIGN_SERCET;


class NoSecretError extends Error {

}




export function signToken(tokenData: object): string {    
    if (!JWT_SIGN_SERCET) throw new NoSecretError();
    const signed = jwt.sign(tokenData, JWT_SIGN_SERCET, {
        algorithm: "HS256",
    });
    
    
    return signed;
}

export function decodeToken(token: string) {
    if (!JWT_SIGN_SERCET) throw new NoSecretError();
    const signed = jwt.decode(token);    
    // we can check here if token decoded gives data we want
    return signed;
}

export function verifyToken(token: string) :boolean{
    if (!JWT_SIGN_SERCET) throw new NoSecretError();
    const signed = jwt.verify(token, JWT_SIGN_SERCET);
    if(typeof signed !== "string") {
        if(signed['issuer']) return true; //meaning it has issuer that we need (we assume it is our token) - of course more check are possible but ....
    }
    return false;
}
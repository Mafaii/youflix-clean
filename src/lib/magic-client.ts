import { Magic } from "magic-sdk";

/* 1. get api key */
const MAGIC_KEY = process.env.NEXT_PUBLIC_MAGIC_API_KEY


const createMagicClient = (key: string | undefined) => {
    return key && typeof window !== 'undefined' && new Magic(key);
}

export const magic = createMagicClient(MAGIC_KEY);
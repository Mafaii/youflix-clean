import { Magic } from '@magic-sdk/admin';

const MAGIC_SECRET_KEY = process.env.MAGIC_SECRET_KEY

const createAdminMagic = async (key: string | undefined) => {
    return key && Magic.init(key);
}
const magicAdmin = async () => createAdminMagic(MAGIC_SECRET_KEY);

export { magicAdmin }

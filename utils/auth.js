import { compare, hash } from "bcryptjs";

async function hashPassword (password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword ;
}

async function verifyPassword (password, hashedPassword) {
    const isVerify = await compare(password, hashedPassword);
    return isVerify ;
}


export { hashPassword, verifyPassword } ;
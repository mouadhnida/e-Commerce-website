
import { User } from "@prisma/client";
import prisma from ".";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        return  { users }
    } catch (error) {
        return {error}
    }
}

export async function createUsers(user) {
    try {
        const newUser = await prisma.user.create({ data: user})
        return { newUser }
    } catch (error) {
        return {error}
    }
}
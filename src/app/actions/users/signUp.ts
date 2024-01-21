'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';


export const signUp = async (name: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            name,
        },
    });

    if (user) {
        return 'An AUP User with that name already exists.';
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            name,
            passwordHash,
        },
    });

    return "AUP System Alert: You have been successfully registered!";
};

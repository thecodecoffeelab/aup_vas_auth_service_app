'use client';

import React, { useEffect, useState } from 'react';
import { signUp } from '../actions/users/signUp';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
    const router = useRouter();

    const { status } = useSession();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage('Login AUP System...');
        
        try {
            const signInResponse = await signIn('credentials', {
                name,
                password,
                redirect: false,
            })

            if(!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials, contact AUP Admin!");
            } else {
                router.refresh();
            }

        } catch(err) {
            console.log(err);
        }

        setMessage(message);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/');
        }
    }, [status]);

    return (
        
        <div className='flex flex-col gap-4 bg-fuchsia-100 p-4'>
            <input
            placeholder="enter username"
            className="w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <input
            placeholder="enter passsword"
            className="w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button
            className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            onClick={handleSubmit}>Login</button>

            <p>{message}</p>
        </div>

        
    );
};

export default SignInForm;

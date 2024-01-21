'use client';

import React, { useState } from 'react';
import { signUp } from '../actions/users/signUp';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage("Wait! W're processing your registration request...");
        const message = await signUp(name, password);
        setMessage(message);
    };

    return (
        <div className='flex flex-col gap-4 bg-fuchsia-100 p-4 flex'>
            <input
            placeholder="your username" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <input
            placeholder="your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button 
            className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
            onClick={handleSubmit}>Staff Register</button>
            <p>{message}</p>
        </div>
    );
};

export default SignUpForm;

import { getServerSession } from 'next-auth/next';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({children}: ProtectedLayoutProps) => {

    const session = await getServerSession(authOptions);

    if(!session || !session.user?.name) {
        return (
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-99">
                <div className="p-6">
                <span className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Protected AUP Main Dashboard</span>
                <hr/> You do not have access to it. Please, contact the Admin! 
                </div>
            </div>

            
        )
    }

  return (
    <>
        {children}
    </>
  );
}

export default ProtectedLayout
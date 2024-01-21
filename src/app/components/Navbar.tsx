import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';

const Navbar = async () => {
    const session = await getServerSession(authOptions);

    return (
        
<nav className="flex items-center justify-between flex-wrap bg-[#f5d0fe] p-6">
  <div className="flex items-center flex-shrink-0 text-purple-700 mr-6">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Logoafricell.png" alt={"logo"} width={150} height={100}/> 
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-red-600 border-teal-400 hover:text-purple-700 hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-purple-700 mr-4">
      <Link href='/'>Home</Link>
      </a>
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-purple-700 mr-4">
      <Link href='/protected/dashboard'>AUP Dashboard</Link>
      </a>
      {session && session.user?.name ? (
                <>
                    <Link href='/auth/signout' className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-purple-700 mr-4">Logout</Link>
                    <p>
                        <b>Logged in as {session.user?.name}</b>
                    </p>
                </>
            ) : (
                <>
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-purple-700">
      <Link href='/auth/signin'>Staff Login</Link>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-purple-700">
      <Link href='/auth/signup'>Staff Register</Link>
      </a>
      </>
            )}
    </div>
    <div>
      <a href="https://www.africell.com/en/home" target="_blank" className="inline-block text-sm px-4 py-2 leading-none border rounded text-purple-700 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Support</a>
    </div>
  </div>
</nav>


        
    );
};

export default Navbar;

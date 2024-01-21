import SignInForm from '@/app/components/SignInForm'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-3xl'>
        <span className="text-fuchsia-500 dark:text-blue-500">Login</span>
        </h1>
        <SignInForm />
    </div>
  )
}

export default SignInPage
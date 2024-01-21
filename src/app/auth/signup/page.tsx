import React from 'react'
import SignUpForm from '../../components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-3xl'>
        <span className="text-fuchsia-500 dark:text-blue-500">Register</span>
        </h1>
        <SignUpForm />
    </div>
  )
}

export default SignUpPage
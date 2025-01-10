import React from 'react'
import { LoginForm } from '../components/login-form'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <main className='min-h-svh w-full flex justify-center items-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
            <LoginForm/>
        </div>
    </main>
  )
}

export default LoginPage
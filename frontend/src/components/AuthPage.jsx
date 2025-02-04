import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

function AuthPage() {
    const [loginOrRegister, setLoginOrRegister] = useState('login');

    return (
        <div className='flex flex-col items-center justify-around h-100'>
            {loginOrRegister === 'login' ? (
                <div>
                    <Login />
                    <label className='text-xs' >don't have an account? </label><button onClick={() => setLoginOrRegister('register')} className='text-sky-500 text-sm'>Register</button>
                </div>
            ) : (
                <Register />
            )}
        </div>
    )
}

export default AuthPage
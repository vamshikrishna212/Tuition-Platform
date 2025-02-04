import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

function AuthPage() {
    const [loginOrRegister, setLoginOrRegister] = useState('login');

    return (
        <div>
            {loginOrRegister === 'login' ? (
                <>
                    <Login />
                    Don't have an account? <button onClick={() => setLoginOrRegister('register')}>Register</button>
                </>
            ) : (
                <Register />
            )}
        </div>
    )
}

export default AuthPage
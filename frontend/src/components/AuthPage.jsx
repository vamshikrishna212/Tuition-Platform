import React from 'react'
import Login from './Login'
import Register from './Register'

function AuthPage({ imgUrl, setImgUrl, role, setRole, loginOrRegister, setLoginOrRegister, handleRegister }) {

    return (
        <div className='flex items-center justify-around h-[90vh] bg-[#E5D9F2]'>
            <div className='h-100 w-100 rounded-full'>
                <img src={imgUrl} alt="image" className='rounded-full' />
            </div>
            <div className='h-100 w-100 rounded-2xl bg-[#CDC1FF] shadow-2xl'>
                <div className='flex flex-col items-center justify-around h-100'>
                    {loginOrRegister === 'login' ? (
                        <div>
                            <Login />
                            <label className='text-xs' >don't have an account? </label><button onClick={() => { setLoginOrRegister('register'); handleRegister() }} className='text-sky-500 text-sm'>Register</button>
                        </div>
                    ) : (
                        <Register
                            role={role}
                            setRole={setRole}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthPage
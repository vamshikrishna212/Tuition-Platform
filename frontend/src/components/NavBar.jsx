import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='h-[10vh] flex items-center justify-between bg-[#A294F9]'>
            <div className='text-white text-2xl p-3 cursor-pointer'>
                <Link to={'/home'}>
                    LoGo
                </Link>
            </div>
            <div className='flex items-center justify-around w-1/2'>
                <div className='text-white cursor-pointer'>
                    <Link to={'/home'}>
                        Home
                    </Link>
                </div>
                <div className='text-white cursor-pointer' >
                    <Link to={'/aboutus'}>
                        About
                    </Link>
                </div>
                <div className='text-white cursor-pointer'>
                    <Link to={'/contactus'}>
                        Contact
                    </Link>
                </div>
                <div className='bg-[#CDC1FF] text-black p-1 pl-2 pr-2 rounded-sm cursor-pointer' onClick={() => { window.location.href = '/login' }}>
                    <Link to={'/login'}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
import React from 'react'

function NavBar() {
    return (
        <div className='h-[10vh] flex items-center justify-between bg-[#A294F9]'>
            <div className='text-white text-2xl p-3 cursor-pointer'>
                LoGo
            </div>
            <div className='flex items-center justify-around w-1/2'>
                <div className='text-white cursor-pointer'>
                    Home
                </div>
                <div className='text-white cursor-pointer' >
                    About
                </div>
                <div className='text-white cursor-pointer'>
                    Contact
                </div>
                <div className='bg-[#CDC1FF] text-black p-1 pl-2 pr-2 rounded-sm cursor-pointer' onClick={() => { window.location.href = '/login' }}>
                    Login
                </div>

            </div>

        </div>
    )
}

export default NavBar
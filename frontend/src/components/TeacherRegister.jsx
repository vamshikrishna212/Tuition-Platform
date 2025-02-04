import React from 'react'

function TeacherRegister() {
    return (
        <div>
            <form action="" className='flex flex-col justify-center'>
                <div className='p-1'>
                    <label htmlFor="" className='mr-1'>Email :</label>
                    <input type="email" placeholder="Enter your email" className='p-1 border-1 border-solid border-black rounded-md' />
                    <br />
                </div>
                <div className='p-1'>

                    <label htmlFor="" className='mr-1'>Subject :</label>
                    <input type="text" placeholder="Enter your subject" className='p-1 border-1 border-solid border-black rounded-md' />
                    <br />
                </div>
                <div className='p-1'>

                    <label htmlFor="" className='mr-1'>Mobile Number :</label>
                    <input type="number" placeholder="Enter your mobile no." className='p-1 border-1 border-solid border-black rounded-md' />
                    <br />
                </div>
                <div className='p-1'>

                    <label htmlFor="" className='mr-1'>Username :</label>
                    <input type="text" placeholder="Enter username" className='p-1 border-1 border-solid border-black rounded-md' />
                    <br />
                </div>
                <div className='p-1'>

                    <label htmlFor="" className='mr-1'>Password :</label>
                    <input type="password" placeholder="Password" className='p-1 border-1 border-solid border-black rounded-md' />
                    <br />
                </div>
                <div className='p-1'>

                    <label htmlFor="" className='mr-1'>Confirm Password :</label>
                    <input type="password" placeholder="Confirm Password" className='p-1 border-1 border-solid border-black rounded-md' />
                    <br />
                </div>
                <div className='ml-10 flex w-60 justify-center '>
                    <button type="submit" className='p-1 border-1 w-60 border-solid border-black rounded-md mt-2 hover:bg-[#A294F9]'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default TeacherRegister
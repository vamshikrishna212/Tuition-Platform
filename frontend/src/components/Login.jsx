import React from 'react'
import { useState } from 'react'

function Login() {

    return (
        <div>
            <form action="" className='flex flex-col justify-around'>
                <div>
                    <label htmlFor="" className='p-1 mr-1.5'>Username :</label>
                    <input type="text" placeholder="Username" className='border-1 border-solid border-black rounded-md p-1' />
                </div>
                <br />
                <div>

                    <label htmlFor="" className='p-1 mr-1.5'>Password : </label>
                    <input type="password" placeholder="Password" className='border-1 border-solid border-black rounded-md p-1' />

                </div>
                <br />

                <div>

                    <label htmlFor="" className='p-1 mr-1.5'>Select role:</label>
                    <select className='border-1 border-solid border-black rounded-md w-50 p-1'>
                        <option value="student" className='bg-[#F5EFFF]'>Student</option>
                        <option value="teacher" className='bg-[#F5EFFF]'>Teacher</option>
                    </select>

                </div>
                <br />

                <button type="submit" className='border-1 border-solid border-black rounded-md p-1 hover:bg-[#A294F9]'>Login</button>



            </form>
        </div>
    )
}

export default Login
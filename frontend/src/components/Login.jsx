import React from 'react'
import { useState } from 'react'

function Login() {

    return (
        <div>
            <form action="">
                Username : <input type="text" placeholder="Username" />
                <br />

                Password : <input type="password" placeholder="Password" />
                <br />

                Select role:
                <select>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
                <br />

                <button type="submit">Login</button>



            </form>
        </div>
    )
}

export default Login
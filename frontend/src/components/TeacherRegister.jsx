import React from 'react'

function TeacherRegister() {
    return (
        <div>
            <form action="">


                Email : <input type="email" placeholder="Enter your email" />
                <br />

                Subject : <input type="text" placeholder="Enter subject" />
                <br />

                Mobile Number : <input type="number" placeholder="Enter mobile number" />
                <br />

                Username : <input type="text" placeholder="Enter username" />
                <br />

                Password : <input type="password" placeholder="Password" />
                <br />

                Confirm Password : <input type="password" placeholder="Confirm Password" />
                <br />

                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default TeacherRegister
import React from 'react'

function StudentRegister() {
    return (
        <div>
            <form action="">
                Email : <input type="email" placeholder="Enter your email" />
                <br />

                Date of Birth : <input type="date" />
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

export default StudentRegister
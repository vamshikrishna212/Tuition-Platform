import React from 'react'
import StudentRegister from './StudentRegister'
import TeacherRegister from './TeacherRegister'



function Register({ role, setRole }) {

    return (
        <div className='w-100 flex flex-col items-center justify-around'>
            {/* <h2 className='text-lg absolute left-5 top-2'>Register</h2> */}
            <select className='border-1 border-y-black border-solid rounded-md p-1 w-60 ' onChange={(e) => { setRole(e.target.value); }}>
                <option value="" disabled selected>Select role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>
            <br />

            {role === 'student' && <StudentRegister />}

            {role === 'teacher' && <TeacherRegister />}
        </div>
    )
}

export default Register
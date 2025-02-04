import React from 'react'
import { useState } from 'react'
import StudentRegister from './StudentRegister'
import TeacherRegister from './TeacherRegister'



function Register() {
    const [role, setRole] = useState('');
    return (
        <div>
            Select role:
            <select onChange={(e) => { setRole(e.target.value); console.log(e.target.value) }}>
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
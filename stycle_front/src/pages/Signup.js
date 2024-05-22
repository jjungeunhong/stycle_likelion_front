import React, { useState } from "react";

const Signup = () => {
    const [values, setValues] = useState({email: '', userid: '', nickname: '', password: ''})

    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values,email: '', userid: '', nickname: '', password: ''})
    }

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({...values, [name]: value})
    }

    return (
       <form onSubmit={handleSubmit} className="flex flex-col items-center pt-[300px]">
            <h1>Sign Up</h1>
            <ul>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={handleChange} value={values.email} />
                </li>
                <li>
                    <label htmlFor="userid">ID</label>
                    <input type="text" name="userid" onChange={handleChange} value={values.userid} />
                </li>
                <li>
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" name="nickname" onChange={handleChange} value={values.nickname} />
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={handleChange} value={values.password} />
                </li>
                <li>
                    <input type="submit" value="signup" />
                </li>
            </ul>
       </form>
    );
};

export default Signup;
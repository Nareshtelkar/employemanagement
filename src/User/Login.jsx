import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URL = "https://mongoserver-dm1k.onrender.com/api/users";


const Login = () => {
    const navigate = useNavigate();




    let [user, setUser] = useState({
        email: "",
        password: ""
    });
    let { email, password } = user;

    let [users, setUsers] = useState([]);

    const fetchData = async () => {
        const data = await axios.get(URL);
        setUsers(data.data.data);
        console.log(data.data.data);
    }

    useEffect(() => {
        fetchData();
        // console.log(students);

    }, [users])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();



        const userExists = users.some(
            (user) => user.email === email && user.password === password
        );

        // console.log(userExists)

        if (userExists) {
            alert("Login Successful");
            navigate("/root");
        } else {
            alert("Invalid Credentials");
        }

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='loginform'>
                <h1 className='head'>Login</h1>
                <div className='form-group'>
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder='email' name='email' value={email} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">password:</label>
                    <input type="password" placeholder='password' name='password' value={password} onChange={handleChange} />

                </div>
                <button className='login-btn'>Login</button>
                <div>
                    <h3>don't have an account <Link to={"/signup"}>Signup</Link> </h3>
                </div>
            </form>
        </div>
    )
}

export default Login
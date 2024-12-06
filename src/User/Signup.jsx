import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const URL = "http://localhost:3000/users";

const Signup = () => {

    const navigate = useNavigate();

    let [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password:""
    });
    let { name, email, mobile,password } = user;

    let [users, setUsers] = useState([]);

    const fetchData = async () => {
        const data = await axios.get(URL);
        setUsers(data.data);
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

        if (!userExists) {
            alert("Signup Successful");
            await axios.post(URL, user)
            navigate("/login");
        } else {
            alert("Already Resistered");
        }


        
        navigate('/login')
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='loginform'>
                <h1 className='head'>SignUp</h1>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder='name' id='name' name='name' value={name} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" placeholder='email' id='email'name='email' value={email} onChange={handleChange}/>
                </div> <div className='form-group'>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" placeholder='phone' id='phone'name='mobile' value={mobile} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">password:</label>
                    <input type="password" placeholder='password' id='password' name='password' value={password} onChange={handleChange}/>

                </div>
                <button className='login-btn'>Signup</button>
                <div>
                    <h3>Already have an account <Link to={"/login"}> Login</Link> </h3>
                </div>
            </form>
        </div>
    )
}

export default Signup
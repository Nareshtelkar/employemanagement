import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URL = "https://mongoserver-dm1k.onrender.com/api/employees";

const Registration = () => {
  const navigate = useNavigate();

  let [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    address: "",
  });
  let { name, email, mobile, designation, address } = employee;

  let [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(URL);
    setEmployees(data.data.data);
  }

  useEffect(() => {
    fetchData();
  }, [employees])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeExists = employees.find(
      (emp) => emp.email === email || emp.mobile === mobile
    );
    if (name === "" || email === "" || mobile === "" || designation === "" || address === "") {
      alert("Please fill all the fields");
      return;

    }


    if (!employeeExists) {
      await axios.post(URL, employee)
      alert("Employee Registered Successfully");
      navigate("/root/employees");

    } else {
      alert("Employee Already Registered");
    }
  }

  return (
    <div className="registration">
      <form onSubmit={handleSubmit} className='form'>
        <h1 className='head'>Employee Registration</h1>
        <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder='name' id='name' name='name' value={name} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder='email' id='email' name='email' value={email} onChange={handleChange} />
        </div> <div className='form-group'>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" placeholder='phone' id='phone' name='mobile' value={mobile} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="designation">Designation:</label>
          <input type="text" placeholder='designation' id='designation' name='designation' value={designation} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor="address">Address:</label>
          <input type="text" placeholder='address' id='address' name='address' value={address} onChange={handleChange} />
        </div>



        <button className='register-btn'>Register</button>

      </form>
    </div>
  )
}

export default Registration
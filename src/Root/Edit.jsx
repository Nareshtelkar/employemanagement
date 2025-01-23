
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = "https://mongoserver-dm1k.onrender.com/api/employees";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    address: ''
  });

  const{name, email, mobile, designation, address}=employee

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      if (response.data) {
        setEmployee(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${URL}/${id}`, employee);
    navigate('/root/employees');
  };

  return (
    <div className="edit">
    <form onSubmit={handleSubmit} className='form'>
      <h1 className='head'>Edit Employee</h1>
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



      <button className='edit-btn'>Edit</button>

    </form>
  </div>
  );
};

export default Edit;

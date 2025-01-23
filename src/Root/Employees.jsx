import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const URL = "https://mongoserver-dm1k.onrender.com/api/employees";

const Employees = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(URL);
    setEmployees(data.data.data);
  }

  useEffect(() => {
    fetchData();
  }, [employees])
  

  const deleteEmployee = async (id) => {
    await axios.delete(`${URL}/${id}`);
    fetchData();
  }

  const editEmployee = (employee) => {
    navigate(`/root/edit/${employee._id}`);
  }

  return (
    <div className='employee-page'>
  <h1>Employees List</h1>
  <table>
    <thead>
      <tr>
        {/* <th>ID</th> */}
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Designation</th>
        <th>Address</th> 
        <th>Edit</th>
        <th>Delete</th>

      </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee._id}>
            {/* <td>{employee._id}</td> */}
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.mobile}</td>
            <td>{employee.designation}</td>
            <td>{employee.address}</td>
            <td>
              <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => editEmployee(employee)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>

    </div>
  )
}

export default Employees
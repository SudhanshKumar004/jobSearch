import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CompanyDashboard = () => {

  const nav = useNavigate();

  const logouthandle=()=>{
    localStorage.clear();
    nav("/companylogin")
  }

  useEffect(()=>{
if(!localStorage.getItem("name"))
{
  nav("/companylogin")
}
  },[])

  return (
    <>
    <div id='topdash'>
        <h1 align="center">Welcome to DashBoard </h1>
       <h2 align="right">Welcome : {localStorage.getItem("name")}</h2>
       <button onClick={logouthandle}>Log out</button>
    </div>


      <div id="dashleft">
    <h2>Job Applications</h2>
      </div>
    </>
  )
}

export default CompanyDashboard


/*<Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Enter Specialization</Form.Label>

        <Form.Select aria-label="Default select example"  name='specialization' onChange={handleInput}>
      <option>Select Catogory</option>
      <option value="Pediatrician">Pediatrician</option>
      <option value="Neurosurgeon ">Neurosurgeon </option>
      <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
      <option value="Ophthalmologist">Ophthalmologist</option>
      <option value="ENT">ENT</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Nephrologist">Nephrologist</option>
      <option value="Infectious Disease Specialist">Infectious Disease Specialist</option>
      <option value="Psychiatrist">Psychiatrist</option>
      <option value="Radiologist">Radiologist</option>
      <option value="Dermatologist">Dermatologist</option>
    </Form.Select>

      </Form.Group>

*/
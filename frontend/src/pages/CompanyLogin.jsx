import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import API_URL from '../config';
import { useNavigate } from 'react-router-dom';

const CompanyLogin = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const nav = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = `${API_URL}/company/companylogin`
    try {
      let response = await axios.post(api , {email:email, password:password});
      console.log(response.data);
      
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("companyid", response.data._id);
        nav("/companydashboard")
      
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg)
      
    }
    }
  return (
    <>
      <h1 align="center" style={{color:"teal"}}>Company Login</h1>
      
       <Form id="loginform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
      </Form.Group>
      
      <button onClick={handleSubmit}>Login</button>
    </Form>
  
    </>
  )
}

export default CompanyLogin

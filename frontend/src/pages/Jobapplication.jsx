import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_URL from '../config';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


const Jobapplication = () => {
    const {id} = useParams()

    const [jobinfo, setJobinfo] = useState({});
    const [input,setInput] = useState({})

    const loadData=async()=>{
        let api = `${API_URL}/company/jobinfo/?jobid=${id}`;
        try {
        const response = await axios.get(api);
        setJobinfo(response.data);
        console.log(response.data);

        } 
        catch (error) {
        console.log(error);
        }
    }

    useEffect(()=>{
        loadData()
    },[])


    const handleInput=(e)=>{
    let name = e.target.name; 
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
     
  }

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    let api = `${API_URL}/candidate/apply`
    try {
      let response = await axios.post(api , {jobid:id, ...input});
      alert(response.data);
      console.log(response.data);
      
      
    } catch (error) {
      alert(error);
      
    }
  }


  return (
    <>
      <h1 align='center'>Job Application Form</h1>
      <div>
        <h3>Applying For: {jobinfo.name}</h3>
      </div>
      <Form id="loginform">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" name='address' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Age</Form.Label>
        <Form.Control type="text" name='age' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact No.</Form.Label>
        <Form.Control type="text" name='contact' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Experience (If Have)</Form.Label>
        <Form.Control type="text" name='exp' onChange={handleInput}/>
      </Form.Group>

      
      
      <button onClick={handleSubmit}>Apply</button>
    </Form>
    </>
  )
}

export default Jobapplication

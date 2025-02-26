import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import API_URL from '../config';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Search = () => {

    const[input,setInput] = useState({})
    const[mydata,setMydata] = useState([])

    const handleInput=(e)=>{
    let name = e.target.name; 
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
     
  }

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    let api = `${API_URL}/company/searchcompany`
    try {
      let response = await axios.post(api , input);
      console.log(response.data);
      setMydata(response.data)
      
    } catch (error) {
      alert(error);      
    }
  }


 let ans = mydata.map((key)=>{
    return(
      <>
      <Card id='card'>
      <Card.Body>
        <Card.Title id='title'>{key.title}</Card.Title>
        <Card.Subtitle id='name'>{key.name}</Card.Subtitle>
        <Card.Text>
           Address: {key.address} <br />
           City: {key.city} <br />
           Salary: {key.salary} <br />
           {key.email}
           <hr />
           <h3 style={{fontWeight:"500"}}>Description:</h3>
           {key.description} <br />
           <hr />
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
      </Card.Body>
    </Card>
      </>
    )
  })

  return (
    <>
      <h1 align="center">Search Jobs</h1>
        <Form id='searchform'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Job Title:</Form.Label>
        <Form.Control type="text" name='title' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Company Name:</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} />
      </Form.Group>

    <input type="button" value="Search" onClick={handleSubmit} id='btn' />
      <hr />
      
        {ans}

      
    </Form>
    
    </>
  )
}

export default Search

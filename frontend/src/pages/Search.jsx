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
      <Card className="jobcard">
  <Card.Body>
    <Card.Title className="jobcardtitle">{key.title}</Card.Title>
    <Card.Subtitle  className="jobcardsubtitle">{key.name}</Card.Subtitle>
    <Card.Text className="jobcardtext">
      Address: {key.address} <br />
      City: {key.city} <br />
      Salary: {key.salary} <br />
      {key.email}
      <hr />
      <h3 style={{ fontWeight: "500" }}>Description:</h3>
      {key.description} <br />
      <hr />
    </Card.Text>
    <Button className="applybtn">Apply Now</Button>
  </Card.Body>
</Card>

      </>
    )
  })

  return (
    <>
     <h1 className="jobsearchcontainer">Search Jobs</h1>
<Form id="searchform" className="jobsearchcontainer">
  <Form.Group className="form-group">
    <Form.Label>Enter Job Title:</Form.Label>
    <Form.Control type="text" name="title" onChange={handleInput} />
  </Form.Group>

  <Form.Group className="form-group">
    <Form.Label>Enter Company Name:</Form.Label>
    <Form.Control type="text" name="name" onChange={handleInput} />
  </Form.Group>

  <input type="button" value="Search" onClick={handleSubmit} className="search-btn" />
  <hr />

  {ans}
</Form>

    
    </>
  )
}

export default Search

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import API_URL from '../config';
import axios from 'axios'


const TopNav = () => {
   const [show, setShow] = useState(false);
   const [input, setInput] = useState({})

   const nav = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput=(e)=>{
    let name = e.target.name; 
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
     
  }

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    let api = `${API_URL}/company/registration`
    try {
      let response = await axios.post(api , input);
      alert(response.data);
      setShow(false)
      nav("/home")
      
    } catch (error) {
      alert(error);
      
    }
  }
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark" id='nav'>
        <Container id='container'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="register" onClick={handleShow}>Job Registration</Nav.Link>
            <Nav.Link as={Link} to="companylogin">Company Login</Nav.Link>
            <Nav.Link as={Link} to="companysearch">Search For Job</Nav.Link>
          </Nav>
          <Navbar.Brand id='logo'><img src="https://www.pngplay.com/wp-content/uploads/9/Job-Transparent-Free-PNG.png" alt="" /></Navbar.Brand>
        </Container>
        <h1 align="center" style={{fontSize:"35px", paddingTop:"10px", color:"white", textShadow:"0 0 5px black,0 0 5px black", marginBottom:"10px"}}>FindMyJob.com</h1>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Here:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Company Name:</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Job Title:</Form.Label>
        <Form.Control type="text" name='title' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" name='address' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" name='salary' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formJobDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control as="textarea" name="description" rows={4} onChange={handleInput} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control type="password" name='password' onChange={handleInput} />
      </Form.Group>
      

      
    </Form>
    
    </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleSubmit}>
            Register Job
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TopNav

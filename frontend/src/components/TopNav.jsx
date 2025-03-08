import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import API_URL from '../config';
import axios from 'axios';

const TopNav = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false); // Toggle state
  const [input, setInput] = useState({});

  const nav = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${API_URL}/company/registration`;
    try {
      let response = await axios.post(api, input);
      alert(response.data);
      setShow(false);
      nav("/home");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" expanded={expanded} className="py-3">
        <Container className="d-flex justify-content-between">
          {/* Hamburger Toggle (for small screens) */}
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={() => setExpanded(expanded ? false : true)} 
          />

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home" onClick={() => setExpanded(false)} className="fs-5">Home</Nav.Link>
              <Nav.Link as={Link} to="register" onClick={() => { handleShow(); setExpanded(false); }} className="fs-5">Job Registration</Nav.Link>
              <Nav.Link as={Link} to="companylogin" onClick={() => setExpanded(false)} className="fs-5">Company Login</Nav.Link>
              <Nav.Link as={Link} to="companysearch" onClick={() => setExpanded(false)} className="fs-5">Search For Job</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Logo & Title (Right-Aligned) */}
          <div className="d-flex align-items-center">
            <Navbar.Brand id='logo'>
              <img 
                src="https://www.pngplay.com/wp-content/uploads/9/Job-Transparent-Free-PNG.png" 
                alt="logo" 
                style={{ height: "50px" }} 
              />
            </Navbar.Brand>
            <h1 
              style={{
                fontSize: "35px", paddingTop: "10px", color: "black",
                textShadow: "0 0 5px white, 0 0 5px white", marginBottom: "10px",
                marginLeft: "10px"
              }}
            >
              FindMyJob.com
            </h1>
          </div>
        </Container>
      </Navbar>

      {/* Job Registration Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Here:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Company Name:</Form.Label>
              <Form.Control type="text" name='name' onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Job Title:</Form.Label>
              <Form.Control type="text" name='title' onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control type="text" name='address' onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" name='city' onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter Salary</Form.Label>
              <Form.Control type="text" name='salary' onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control as="textarea" name="description" rows={4} onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3">
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
  );
};

export default TopNav;

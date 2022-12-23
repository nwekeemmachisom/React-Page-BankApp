import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './createaccount.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function CreateAccount() {
  const [namer,setNamer] = useState('')
  const [amount,setAmount] = useState('')
  const [password,setPassword] = useState('')
  let navigate = useNavigate()
  
  console.log(namer)
  let retify = (e) => {
   
    e.preventDefault()
    let obj = {
      Name : namer,
      Amount : amount,
      Password : password,
    }
    localStorage.setItem(`${namer}`,JSON.stringify(obj))
    navigate('/Login')
  }

  return (
    <>
    {/* Navbar Section */}
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">BankApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Header Section */}
    <Container>
        <Row>
            <Col sm = {4}>
            <Form onSubmit={retify}>
            <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter Name"
         value={namer} 
         onChange = {(e)=> setNamer(e.target.value)}
         required/>
     </Form.Group>

     <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control 
        type="number"
        placeholder="Enter Amount"
        value = {amount}
        onChange = {(e)=> setAmount(e.target.value)}
        required/>
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        value = {password}
        onChange = {(e)=> setPassword(e.target.value)}
        required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
            </Col>
        </Row>
    </Container>

    </>
  )
  
}

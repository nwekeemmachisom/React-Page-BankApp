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
import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import header_img from '../images/kuda.jpg'
// import CreateAccount from '../CreateAccount/CreateAccount';


export default function Login() {
  const [logname,setLogName] = useState('')
  const [logpassword,setLogPassword] = useState('')
  
  let navigate = useNavigate()


  let handleSubmit = (e) => {
    e.preventDefault()
    let userDetails = JSON.parse(localStorage.getItem(`${logname}`))
    console.log(userDetails.Amount)

    if (logpassword == userDetails.Password && logname == userDetails.Name) {
      navigate('/Dashboard')

      localStorage.setItem(`useramount`,userDetails.Amount)

      localStorage.setItem(`username`,userDetails.Name)
    }
    else{
      alert("Wrong password")
    }

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
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Name" 
        value={logname}
        onChange={(e)=> setLogName(e.target.value)}
        required/>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={logpassword} 
        onChange={(e)=> setLogPassword(e.target.value)}
        required/>
      </Form.Group>

      <Button variant="primary" type="submit">
         Login
      </Button>

     
     </Form>
     <Button className = 'mt-3' onClick ={()=>{
      navigate('/CreateAccount')
     }}>Create An Account</Button>
     </Col>
     </Row>
        </Container>
      
     
    </>
    
  )
}

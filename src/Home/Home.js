import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Home.css'
//import CreateAccount from '../CreateAccount/CreateAccount';
import header_img from '../images/kuda.jpg'

export default function Home() {
  let navigate = useNavigate()
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

    <Container className = 'header'>
       <Row>
        <Col sm = {6} className = "">
          <h1>We're the money <br/> app for Africans.</h1>
          <p>We're here to help you get the best out of your <br/> money, no strings attached. <br/>Welcome to freedom!</p>
           {/* <Link to='/CreateAccount' className='btn btn-primary'>Get Started</Link> */}
           <Button 
           variant='primary'
           onClick={(e)=>{
            e.preventDefault()
              navigate('/CreateAccount')
           }}>
              Get Started
           </Button>
        </Col>
        <Col sm = {6}>
            <img src={header_img} alt = 'Bank img' fluid/>
        </Col>
       </Row>
    </Container>
   
    </>
    
  )
}


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './dashboard.css'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [handleSignOut,sethandleSignOut] = useState(false)

    const handleSignOutClose = () => sethandleSignOut(false)
    const handleSignOutShow = () => sethandleSignOut(true)
    const [showWithdraw, setShowWithdraw]= useState(false);

    const handleCloseWithdraw = () => setShowWithdraw(false);
    const handleShowWithdraw = () => setShowWithdraw(true)

    let dashName = localStorage.getItem(`username`)
    let navigate = useNavigate() 
    
    let dashAmount = parseFloat(localStorage.getItem(`useramount`))

    const [deposit,setDeposit] = useState()
    const [withdraw,setWithdraw] = useState()

    let handleDeposit = () => {
      
       if(deposit > 100000){
        document.getElementById('depositMessage').innerHTML = 'Deposit Limits Exceeded'
       }
       else{
        let result;

       
       result = dashAmount + deposit
      
       dashAmount = result
       
       document.getElementById('spanamount').innerHTML = dashAmount
       document.getElementById('depositMessage').innerHTML = 'Transaction Successful'
       setDeposit('')
       
        }
       
    } 

    let handleWithdraw = () => {
      

       if (withdraw > dashAmount ) {
        document.getElementById('withdrawMessage').innerHTML = 'Insufficient Funds'
       }
       else{
        let withresult;
        withresult = dashAmount - withdraw
       dashAmount = withresult
       document.getElementById('spanamount').innerHTML = dashAmount
       document.getElementById('withdrawMessage').innerHTML = 'Transaction Successful'
       setWithdraw('')
       
       } 
    }
 
      let signOut = () => {
        localStorage.removeItem("username")
        localStorage.removeItem('useramount')
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

    <Container className= 'mt-5'>
        <Row>
            <Col sm = {6}>
                    <Card>
            <Card.Body>
                <Card.Title>Welcome to your Dashboard , {dashName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Choose your Transaction</Card.Subtitle>
                
               
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Account Balance : <span id='spanamount'>{dashAmount}</span>
                  </ListGroup.Item>
                {/* second list group begins here */}
                <ListGroup.Item>
                     <Button variant="primary" onClick={handleShow}>
     Deposit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
            type = 'number'
            placeholder='How much would you like to deposit'
            value={deposit}
            onChange={(e)=> setDeposit(parseFloat(e.target.value))}/>

          </Form>
          <p id='depositMessage'></p>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleDeposit}>
            Deposit
          </Button>
        </Modal.Footer>
                 </Modal>
                 </ListGroup.Item>

                 {/* third list group begins here */}
                 
                <ListGroup.Item>
                     <Button variant="primary" onClick={handleShowWithdraw}>
        Withdraw
      </Button>

      <Modal show={showWithdraw} onHide={handleCloseWithdraw}>
        <Modal.Header closeButton>
          <Modal.Title>Withdrawal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
            type = 'number'
            placeholder='How much would you like to withdraw'
            value={withdraw}
            onChange={(e)=> setWithdraw(parseFloat(e.target.value))}/>
          </Form>
          <p id='withdrawMessage'></p>
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseWithdraw}>
            Close
          </Button>
          <Button onClick={handleWithdraw}
          >
            Withdraw
          </Button>
         
        </Modal.Footer>
                </Modal>
                </ListGroup.Item>

                {/* sign out */}

                <ListGroup.Item>
                     <Button variant="primary" onClick={handleSignOutShow}>
     Sign Out
      </Button>

      <Modal show={handleSignOut} onHide={handleSignOutClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Dear {dashName}, thank you for using our Mobile App. Click Sign out to sign out.</p>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="secondary" onClick={handleSignOutClose}>
            Close
          </Button>
        <Button onClick={signOut}>
           Sign Out
          </Button>
        </Modal.Footer>
                 </Modal>
                 </ListGroup.Item>


            </ListGroup>
            </Card>
            </Col>
        </Row>
    </Container>
   </>
  )
}
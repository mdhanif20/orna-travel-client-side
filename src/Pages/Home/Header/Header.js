import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";
import useFirebase from './../../Firebase/useFirebase';
import "./Header.css";


const Header = () => {
    const {users,logOut} = useFirebase();
    
    return (
        <div>

            
            <Navbar bg="light" expand="lg" className="p-0">
                <Container>
                <Navbar.Brand href="#home">
                 <img
                    key={logo._id}
                    alt=""
                    src= {logo}
                    width="100"
                    height="60"
                    className="d-inline-block align-top"
                    /> 
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="fs-5 fw-bolder" as={Link} to="/home" href="#home">Home</Nav.Link>
                        <Nav.Link className="fs-5 fw-bolder" as={Link} to="/booking" href="#link">Booking</Nav.Link>
                        <Nav.Link className="fs-5 fw-bolder" as={Link} to="/manageBooking" href="#link">Manage Booking</Nav.Link>
                        <Nav.Link className="fs-5 fw-bolder" as={Link} to="/contact" href="#link">Contact Us</Nav.Link>
                       {
                           users.email?<button onClick={logOut} id="headerLogOut" className="border-0 fs-5 fw-bolder">Log Out</button>
                           :
                           <Nav.Link className="fs-5 fw-bolder" as={Link} to="/login" href="#link">Login</Nav.Link> 
                           
                       }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Menubar = () => {
    return (
        <Navbar className='my-2' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontWeight: '600', color: '#4a4c4f' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} className='me-4' to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className='me-4' to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} className='me-4' to="/blogs">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>
                    <div className='register-responsive'>
                        <Navbar.Text className='fw-bold'>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <Link to='/login'>
                            <Button className='ms-3 btn-register' variant="success">Login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button className='ms-3 btn-register' variant="warning">Register</Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;
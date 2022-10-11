import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';


const Menubar = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <Navbar className='my-2' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-end' id="navbarScroll">
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
                        {!user ?
                            <>
                                <Navbar.Text className='fw-bold'>
                                    Signed in as: <a className='text-success' href="#login">Guest</a>
                                </Navbar.Text>
                                <Link className='btn-nav mb-1' to='/login'>
                                    <Button className='ms-3 btn-register fw-bold' variant="success">Login</Button>
                                </Link>
                                <Link className='btn-nav' to='/register'>
                                    <Button className='btn-register ms-3 fw-bold' variant="warning">Register</Button>
                                </Link>
                            </>
                            :
                            <>
                                <Navbar.Text className='fw-bold'>
                                    Signed in as: <a className='text-success' href="#login">{user.displayName}</a>
                                </Navbar.Text>
                                <Link className='btn-nav'>
                                    <Button onClick={handleSignout} className='btn-register ms-3 fw-bold' variant="danger">Signout</Button>
                                </Link>
                            </>

                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;
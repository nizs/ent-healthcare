import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import Navbar from './Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-primary py-2'>
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={6}>
                        <Link to='/'>
                            <img src={Logo} alt="site_logo" />
                        </Link>
                    </Col>
                    <Col className='d-flex align-items-center' sm={12} md={8} lg={6}>
                        <div className='ms-auto appointment-res'>
                            <div>
                                <Button className='fw-bold rounded-0 px-3 py-2' variant="success">MAKE AN APPOINTMENT</Button>
                            </div>
                            <div className='ms-4 text-end text-white contact-text'>
                                <h4 className='mb-0'>1800-123-4567</h4>
                                <p style={{ fontSize: '11px', fontWeight: '600' }} className='mb-0'>CALL FOR AN APPOINTMENT</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* -------------------navbar===================== */}
                <Navbar></Navbar>
                <div className='my-1'>
                    <img className='img-fluid' src="https://i.ibb.co/WfJm3Xn/header-banner.png" alt="header_banner" />
                </div>
            </Container>
        </div>
    );
};

export default Header;
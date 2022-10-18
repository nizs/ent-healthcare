import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaRegClock, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import '../Services/Treatment/Treatment.css';

const Appointment = () => {
    const navigate = useNavigate();
    const handleFormSubmit = () => {
        navigate('/orders')
    }
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <div className=''>
                        <h2 className='title'>Need an Appointment?</h2>
                        <p className='card-description'>Request for appointment now by filling this form and book online.</p>
                    </div>
                    <Col sm={12} md={12} lg={8}>
                        <div className='mb-3'>
                            <Container className='p-0'>
                                {/* checkout-form */}
                                <Form onSubmit={handleFormSubmit} className='form-back border'>
                                    <Row>
                                        <Col sm={12} md={6} lg={6}>
                                            <div>
                                                <Form.Group className="mb-3" controlId="formFirstName">
                                                    <Form.Control className='p-3' type="text" placeholder="NAME" required />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formPhone">
                                                    <Form.Control className='p-3' type="text" placeholder="PHONE" required />
                                                </Form.Group>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <div>
                                                <Form.Group className="mb-3" controlId="formLastName">
                                                    <Form.Control className='p-3' type="text" placeholder="ADDRESS" required />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control className='p-3' type="email" placeholder="EMAIL" required />
                                                </Form.Group>
                                            </div>
                                        </Col>
                                        <FloatingLabel controlId="floatingTextarea2" label="" className=''>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                        <Button className='form-submit mt-3' variant="primary" type='submit'>CHECKOUT</Button>
                                    </Row>
                                </Form>
                            </Container>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <div className='border scedual'>
                            <div className='d-flex align-items-center'>
                                <span className='fs-1 text-success '><FaRegClock /></span>
                                <h4 className='mt-3 ms-3 fw-normal'>Our Schedule</h4>
                            </div>
                            <div className='my-4'>
                                <p className='fw-bold lh-sm title'>Monday to Friday :</p>
                                <p className='lh-sm card-description'>9:00 am to 5:00pm</p>
                            </div>
                            <div className='my-4'>
                                <p className='fw-bold lh-sm title'>Saturday:</p>
                                <p className='lh-sm card-description'>9:00 am to 3:00pm</p>
                            </div>
                            <div className='my-4'>
                                <p className='fw-bold lh-sm title'>Emergancy Appointment:</p>
                                <p className='lh-sm card-description'>anytime</p>
                                <p className='text-success immergency-font'>(you should pay extra charge for emergancy )</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='fs-5 text-success '><FaPhoneAlt /></span>
                                <p className='mt-4 ms-2 fw-bold title'>1800-123-4567</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='fs-5 text-success '><FaRegEnvelope /></span>
                                <p className='mt-4 ms-2 fw-bold title'> info@enthealthcare.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Appointment;
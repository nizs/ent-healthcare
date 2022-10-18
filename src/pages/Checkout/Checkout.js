import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const navigate = useNavigate();

    const handleFormSubmit = e => {
        e.preventDefault();
        navigate('/orders');
    }

    return (
        <>
            <div className='py-5 mb-4'>
                <Container>
                    <div className='py-4'>
                        <h2>Checkout</h2>
                        <p>By filling this form Checkout your Service to our order section</p>
                    </div>
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
                            <Button className='form-submit mt-2' variant="primary" type='submit'>CHECKOUT</Button>
                        </Row>
                    </Form>
                </Container>
            </div>
        </>
    );
};

export default Checkout;
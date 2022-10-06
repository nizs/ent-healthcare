import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Register.css';

const Signup = () => {
    return (
        <div className='form-page-back py-5'>
            <Container>
                <div className='py-4'>
                    <h2>Signup Account</h2>
                    <p>By filling this form be a Registered member of ENT Healthcare</p>
                </div>
                {/* signup-form */}
                <Form className='form-back border' onSubmit=''>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div>
                                <Form.Group className="mb-3" controlId="formFirstName">
                                    <Form.Control className='p-3' type="text" placeholder="NAME" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Control className='p-3' type="text" placeholder="PHONE" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className='p-3' type="password" placeholder="PASSWORD" />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div>
                                <Form.Group className="mb-3" controlId="formLastName">
                                    <Form.Control className='p-3' type="text" placeholder="LAST NAME" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className='p-3' type="email" placeholder="EMAIL" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Control className='p-3' type="password" placeholder="CONFIRM PASSWORD" />
                                </Form.Group>
                            </div>
                        </Col>
                        <Button className='form-submit mt-2' variant="primary" type='submit'>SIGNUP</Button>
                    </Row>
                </Form>
                <div>
                    <div className='d-flex align-items-center py-5'>
                        <div className='border border-1 border-primary w-50'></div>
                        <div className='mx-2'>or</div>
                        <div className='border border-1 border-primary w-50'></div>
                    </div>
                    <div className='d-flex flex-column pb-3 align-items-center'>
                        <Button className='mt-2 fw-bold alt-signin-register' variant="primary" type='submit'>SIGIN WITH GOOGLE</Button>
                        <Button className='mt-2 fw-bold alt-signin-register' variant="dark" type='submit'>SIGIN WITH GITHUB</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
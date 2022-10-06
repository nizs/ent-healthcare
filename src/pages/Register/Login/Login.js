import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Register.css';

const Login = () => {
    return (
        <div className='form-page-back py-5'>
            <Container>
                <div className='py-4 text-center'>
                    <h2>Login Account</h2>
                    <p>Log in on your ENT Healthcare account</p>
                </div>
                {/* signup-form */}
                <Form className='form-back border form-width mx-auto' onSubmit=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='p-3' type="email" placeholder="EMAIL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3' type="password" placeholder="PASSWORD" />
                    </Form.Group>
                    <Button className='form-submit-login mt-2' variant="primary" type='submit'>LOGIN</Button>
                </Form>
                <div className='mx-auto alt-signin'>
                    <div className='d-flex align-items-center py-5'>
                        <div className='border border-1 border-primary w-100'></div>
                        <div className='mx-2'>or</div>
                        <div className='border border-1 border-primary w-100'></div>
                    </div>
                    <div className='d-flex flex-column pb-3'>
                        <Button className='mt-2 fw-bold' variant="primary" type='submit'>SIGIN WITH GOOGLE</Button>
                        <Button className='mt-2 fw-bold' variant="dark" type='submit'>SIGIN WITH GITHUB</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
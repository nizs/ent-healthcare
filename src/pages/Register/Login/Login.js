import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Register.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2] = useSignInWithGithub(auth);


    const handleLoginsubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleGoogleSignin = () => {
        signInWithGoogle();
    }
    if(user1){
        navigate(from, { replace: true });
    }
    const handleGitgubSignin = () => {
        signInWithGithub();
    }
    if(user2){
        navigate(from, { replace: true });
    }
    return (
        <div className='form-page-back py-5'>
            <Container>
                <div className='py-4 text-center'>
                    <h2>Login Account</h2>
                    <p>Log in on your ENT Healthcare account</p>
                </div>
                {/* signup-form */}
                <Form onSubmit={handleLoginsubmit} className='form-back border form-width mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} className='p-3' type="email" placeholder="EMAIL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} className='p-3' type="password" placeholder="PASSWORD" required />
                    </Form.Group>
                    <div className='my-3'>
                        <span>Do not have an account? <Link className='text-decoration-none' to='/register'>Signup here</Link></span>
                    </div>
                    <Button className='form-submit-login mt-2' variant="primary" type='submit'>LOGIN</Button>
                </Form>
                <p className='text-center text-danger mt-3'>{error?.message}</p>
                <div className='mx-auto alt-signin'>
                    <div className='d-flex align-items-center py-5'>
                        <div className='border border-1 border-primary w-100'></div>
                        <div className='mx-2'>or</div>
                        <div className='border border-1 border-primary w-100'></div>
                    </div>
                    <div className='d-flex flex-column pb-3'>
                        <Button onClick={handleGoogleSignin} className='mt-2 fw-bold' variant="primary" type='submit'>SIGNIN WITH GOOGLE</Button>
                        <Button onClick={handleGitgubSignin} className='mt-2 fw-bold' variant="dark" type='submit'>SIGNIN WITH GITHUB</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
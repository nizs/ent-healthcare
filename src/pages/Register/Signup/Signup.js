import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import '../Register.css';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [customerror, setcustomError] = useState('');
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleNameBlur = e => {
        setDisplayName(e.target.value);
    }
    const handleLastNameBlur = e => {
        setLastname(e.target.value);
    }
    const handlePhoneBlur = e => {
        setPhone(e.target.value);
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmpassword(e.target.value);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification : true});
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2] = useSignInWithGithub(auth);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmpassword) {
            setcustomError('Please confirm your pass as your given it in your password field');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName })
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
                <div className='py-4'>
                    <h2>Signup Account</h2>
                    <p>By filling this form be a Registered member of ENT Healthcare</p>
                </div>
                {/* signup-form */}
                <Form onSubmit={handleFormSubmit} className='form-back border'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div>
                                <Form.Group className="mb-3" controlId="formFirstName">
                                    <Form.Control onBlur={handleNameBlur} className='p-3' type="text" placeholder="FIRST NAME" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Control onBlur={handlePhoneBlur} className='p-3' type="text" placeholder="PHONE" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control onBlur={handlePasswordBlur} className='p-3' type="password" placeholder="PASSWORD" required />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div>
                                <Form.Group className="mb-3" controlId="formLastName">
                                    <Form.Control onBlur={handleLastNameBlur} className='p-3' type="text" placeholder="LAST NAME" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onBlur={handleEmailBlur} className='p-3' type="email" placeholder="EMAIL" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Control onBlur={handleConfirmPasswordBlur} className='p-3' type="password" placeholder="CONFIRM PASSWORD" required />
                                </Form.Group>
                            </div>
                        </Col>
                        <div className='my-3'>
                            <span>Alredy have an account? <Link className='text-decoration-none' to='/login'>Login here</Link></span>
                        </div>
                        <Button className='form-submit mt-2' variant="primary" type='submit'>SIGNUP</Button>
                    </Row>
                </Form>
                <p className='text-center text-danger mt-3'>{customerror}</p>
                <p className='text-center text-danger mt-3'>{error?.message}</p>
                <div>
                    <div className='d-flex align-items-center py-5'>
                        <div className='border border-1 border-primary w-50'></div>
                        <div className='mx-2'>or</div>
                        <div className='border border-1 border-primary w-50'></div>
                    </div>
                    <div className='d-flex flex-column pb-3 align-items-center'>
                        <Button onClick={handleGoogleSignin} className='mt-2 fw-bold alt-signin-register' variant="primary" type='submit'>SIGNIN WITH GOOGLE</Button>
                        <Button onClick={handleGitgubSignin} className='mt-2 fw-bold alt-signin-register' variant="dark" type='submit'>SIGNIN WITH GITHUB</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
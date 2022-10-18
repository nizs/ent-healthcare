import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error = () => {
    const navigate = useNavigate();
    const handleErrorHome = () => {
        navigate('/home');
    }
    return (
        <>
            <Container>
                <div className='text-center my-5'>
                    <h1 className='error-title fst-italic text-warning'>404</h1>
                    <h4>Page Not Found</h4>
                    <p>The page you are looking for does not seem to exist</p>
                    <Button onClick={handleErrorHome} className='my-4 fw-bold' variant="success">GO TO HOME</Button>
                </div>
            </Container>
        </>
    );
};

export default Error;
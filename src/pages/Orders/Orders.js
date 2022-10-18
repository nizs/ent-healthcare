import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();
    const handleOrdersHome = () => {
        navigate('/home');
    }
    return (
        <>
            <Container>
                <div className='my-5'>
                    <div className='w-25 mx-auto'>
                        <img className=' w-100 rounded' src="https://i.ibb.co/wd6y59Y/thanksgiving.jpg" alt="thanksgiving_img" />
                    </div>
                    <div className='text-center'>
                        <h1 className='my-3'>Thank you For Choosing Our Service</h1>
                        <Button onClick={handleOrdersHome} className='my-4 fw-bold px-3 py-2' variant="success">GO TO HOME</Button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Orders;
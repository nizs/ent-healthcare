import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../Services/Treatment/Treatment.css";

const Aboutus = () => {
    return (
        <>
            <Container>
                <Row className='my-5 gy-4 pb-4'>
                    <div className='text-center my-3'>
                        <h1 className='fw-bold title'>About Us</h1>
                        <p className='card-description'>A Short bio about our developer himself and about his future goal yet.</p>
                    </div>
                    <Col sm={12} md={12} lg={6}>
                        <div className='dev-bio'>
                            <h1 className='text-primary fst-italic'>Tauhid Afser</h1>
                            <p className='card-description mt-3 fs-5 fst-normal'><q>Web Development is a fascinating thing for me and it became more of it when i am on a boat of right path and i am trying my best though there is a lot of obstacle on it's way and and at the moment i am even more concern about my goal.However Based on the knowledge i have now , it is obvious that it isn't enough for my professional engagement and for that i'm gonna do more work and with that i'll accomplish the front End journey and step my foot ahead to the broader path as a Fullstack Web Developer</q></p>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div>
                            <img className='img-fluid' src="https://i.ibb.co/7n931C7/aboutme.jpg" alt="about_img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Aboutus;
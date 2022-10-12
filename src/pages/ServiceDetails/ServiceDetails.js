import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import "../Services/Treatment/Treatment.css";

const ServiceDetails = () => {
    const {serviceid} = useParams();
    const [servicedt , setServicedt] = useState([]);
    const [singleservicedt , setSingleservicedt] = useState({});
    const {serviceTitle, serviceDescription, serviceImg, serviceSingleimg } = singleservicedt;

    useEffect(() => {
        fetch('/ent_db.json')
        .then(res => res.json())
        .then(data => setServicedt(data))
    } , [])
    useEffect(() => {
        if(servicedt.length > 0){
            const matcheddt = servicedt.find(sservicedt => sservicedt.id == serviceid);
            setSingleservicedt(matcheddt);
        }
    }, [servicedt])
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col className='mb-4' sm={12} md={12} lg={8}>
                        <div className='border border-1'>
                            <img className='img-fluid' src={serviceSingleimg} alt="service_details_img" />
                            <div className='m-4'>
                                <div>
                                    <h3 className='fw-bold title'>{serviceTitle}</h3>
                                    <h4 className='my-3'>Medical & Healthcare for Ear Nose & Throat doctor. General otolaryngologists treat illnesses involving the ears, nose, throat, sinuses and head and neck. it surgical care for otolaryngological related conditions.</h4>
                                    <p className='card-description'>{serviceDescription}</p>
                                </div>
                                <Row className='my-5'>
                                    <Col className='mb-5' sm={12} md={6} lg={6}>
                                        <div>
                                            <h4 className='title mb-3'>Ear Infections</h4>
                                            <p className='card-description'>Ear infections occur when a cold, throat infection, or allergy attack causes fluid to become trapped in ear the sections of ear behind the eardrum.</p>
                                            <Button className='fw-bold p-0 text-decoration-none' variant="link">View More</Button>
                                        </div>
                                    </Col>
                                    <Col className='mb-5' sm={12} md={6} lg={6}>
                                        <div>
                                            <h4 className='title mb-3'>Hearing Loss</h4>
                                            <p className='card-description'>Hearing loss is the result of sound signals not reaching the brain. There are two main types of hearing loss, depending on where the problem lies.</p>
                                            <Button className='fw-bold p-0 text-decoration-none' variant="link">View More</Button>
                                        </div>
                                    </Col>
                                    <Col className='mb-5' sm={12} md={6} lg={6}>
                                        <div>
                                            <h4 className='title mb-3'>Suinus, Polyps & Allergy</h4>
                                            <p className='card-description'>Sinus is a sac or air filled cavity found within the bone or tissues. Sinuses or paranasal sinuses are group of four pairs of sinuses located above the eyes.</p>
                                            <Button className='fw-bold p-0 text-decoration-none' variant="link">View More</Button>
                                        </div>
                                    </Col>
                                    <Col className='mb-5' sm={12} md={6} lg={6}>
                                        <div>
                                            <h4 className='title mb-3'>Bleeding Nose</h4>
                                            <p className='card-description'>The most common causes of nosebleeds are drying of the nasal membranes and nose picking which can be prevented with proper lubrication of the nasal passages.</p>
                                            <Button className='fw-bold p-0 text-decoration-none' variant="link">View More</Button>
                                        </div>
                                    </Col>
                                    <Col className='mb-5' sm={12} md={6} lg={6}>
                                        <div>
                                            <h4 className='title mb-3'>Snoring & Sleep Apnoea</h4>
                                            <p className='card-description'>Insight into sleeping disorders and sleep apnea.This area is the collapsible part of the airway where the tongue and upper throat meet the soft palate.</p>
                                            <Button className='fw-bold p-0 text-decoration-none' variant="link">View More</Button>
                                        </div>
                                    </Col>
                                    <Col className='mb-5' sm={12} md={6} lg={6}>
                                        <div>
                                            <h4 className='title mb-3'>Tonsil Infection</h4>
                                            <p className='card-description'>Tonsillitis, swelling and irritation of the tonsils caused by an infection, may lead to a sore throat, fever, swollen glands in the neck, and trouble swallowing.</p>
                                            <Button className='fw-bold p-0 text-decoration-none' variant="link">View More</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Button className='rounded-0 fw-bold my-3' variant="success">HAVE SERVICE</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/QNTHxXg/team-1.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className='fs-4 text-dark'>
                                        <h3 className='title'>Dr.Simon Elswin</h3>
                                        <p className='text-primary fs-6'>MBBS, BSC(MED)(HONS), MS</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/vwScRxq/team-2.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption className='fs-5 text-dark'>
                                        <h3 className='title'>Dr.Cameron Lewers</h3>
                                        <p className='text-primary fs-6'>MBBS, BSC(MED)(HONS), MS</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/sVCcG9b/team-3.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption className='fs-5 text-dark'>
                                        <h3 className='title'>Dr.Alana Hopley</h3>
                                        <p className='text-primary fs-6'>MBBS, BSC(MED)(HONS), MS</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ServiceDetails;
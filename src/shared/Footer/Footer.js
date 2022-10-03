import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { MdDoubleArrow , MdLocationOn, MdPhone } from "react-icons/md";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className='bg-dark text-white py-5'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div className='p-3'>
                            <h5 className='pb-4'>ABOUT ENT CARE CLINIC</h5>
                            <p className='grey-text'>Welcome all of our patients as family, providing them with ENT care and support through their medical journey. Suspendisse eget nunc quis libero mot libero. Ut lobortis metus at quam semper condimentum.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className='p-3'>
                            <h5 className='pb-4'>GET IN TOUCH</h5>
                            <div className='grey-text'>
                                <div className='d-flex border-bottom  mb-4 pb-4'>
                                    <span><MdLocationOn/></span>
                                    <span className='ms-2'>ENT Care Clinic, Zeppelinstr 533970 SYDNEY NSW</span>
                                </div>
                                <div className='d-flex border-bottom mb-4 pb-4'>
                                    <span><MdPhone/></span>
                                    <span className='ms-2'>+00 (800) 123-4567</span>
                                </div>
                                <div className='d-flex border-bottom mb-4 pb-4'>
                                    <span><BsFillMegaphoneFill/></span>
                                    <span className='ms-2'>+00 (123) 456 7890</span>
                                </div>
                                <div className='d-flex border-bottom mb-4 pb-4'>
                                    <span><FaEnvelope/></span>
                                    <span className='ms-2'>Monday to Saturday:
                                        9:00 am to 5:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <div className='p-3 mb-4'>
                            <h5 className='pb-4'>USEFUL LINKS</h5>
                            <div className='d-flex flex-column'>
                                <Link className='grey-text mb-3 text-decoration-none'><MdDoubleArrow className='me-2' />Who we are</Link>
                                <Link className='grey-text mb-3 text-decoration-none'><MdDoubleArrow className='me-2' />Services</Link>
                                <Link className='grey-text mb-3 text-decoration-none'><MdDoubleArrow className='me-2' /> Blogs</Link>
                                <Link className='grey-text text-decoration-none'><MdDoubleArrow className='me-2' /> Contact Us</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='d-flex align-items-center' sm={12} md={6} lg={4}>
                        <div className='p-3 news-back d-flex flex-column p-5'>
                            <h5 className='mb-3'>Subscribe To Ent Healthcare</h5>
                            <h3 className='mb-4'>Newsletter</h3>
                            <p className='grey-text mb-4'>If you would like to receive our newsletter detailing important hearing health information & updates.</p>
                            <input className='p-2 w-100 rounded border-0' type="email" value='Email' />
                            <Button className='mt-3 fw-bold' variant="success">SUBMIT</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <p className='text-center bg-dark m-0 py-4 px-2 border-top copyright-text grey-text'>2022-present © ENT Healthare, a programming Hero initiative By <a className='ms-1' href='https://github.com/nizs' target='_blank'>Tauhid</a></p>
        </div>
        </>
    );
};

export default Footer;
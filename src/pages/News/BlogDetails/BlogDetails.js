import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import "../../Services/Treatment/Treatment.css";

const BlogDetails = () => {
    const { blogid } = useParams();
    const [blogdt, setBlogdt] = useState([]);
    const [singleblogdt, setSingleblogdt] = useState({});
    console.log(singleblogdt);
    const { blogTitle, blogDescription, blogDetailsDescription, blogTime, blogComment, blogDetailsImg } = singleblogdt;

    useEffect(() => {
        fetch('/ent_blog_db.json')
            .then(res => res.json())
            .then(data => setBlogdt(data))
    }, [])
    useEffect(() => {
        if (blogdt.length > 0) {
            const matchedblogdt = blogdt.find(sblogdt => sblogdt.id == blogid);
            setSingleblogdt(matchedblogdt);
        }
    }, [blogdt])
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col className='mb-4' sm={12} md={12} lg={8}>
                        <div className='border border-1'>
                            <img className='img-fluid' src={blogDetailsImg} alt="blog_details_img" />
                            <div className='m-4'>
                                <div className='my-3 blog-font-sm'>
                                    <span className='blog-font-time'>{blogTime}</span>
                                    <span className='card-description ms-5'>Comments <span className='blog-font-comment'>{blogComment}</span></span>
                                </div>
                                <div>
                                    <h3 className='fw-bold title'>{blogTitle}</h3>
                                    <p className='card-description'>{blogDetailsDescription}</p>
                                </div>
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

export default BlogDetails;
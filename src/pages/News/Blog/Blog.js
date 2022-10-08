import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../Services/Treatment/Treatment.css';

const Blog = ({ blog }) => {
    const { blogTitle, blogDescription, blogTime, bLogImg, blogComment } = blog;
    return (
        <>
            <Col sm={12} md={6} lg={4}>
                <Card className='border border-0 d-flex flex-column mb-4'>
                    <Card.Img className='img-fluid' variant="top" src={bLogImg} />
                    <Card.Body className='ps-0 pe-2'>
                        <div className='my-3 blog-font-sm'>
                            <span className='blog-font-time'>{blogTime}</span>
                            <span className='card-description ms-5'>Comments <span className='blog-font-comment'>{blogComment}</span></span>
                        </div>
                        <Card.Title className='my-4 title'>{blogTitle}</Card.Title>
                        <Card.Text className='card-description mb-4'>
                            {blogDescription}
                        </Card.Text>
                        <Button className='rounded-0 fw-bold' variant="success">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import "../../Services/Treatment/Treatment.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./ent_blog_db.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <Container>
                <Row className='py-5'>
                    <div className='text-center my-4'>
                        <h2 className='fw-bold title'>Latest News form ENT Healthcare</h2>
                        <p className='card-description'>A blog about Ear, Nose and Throat diseases in simple language.The latest sinus and allergy treatments and advancements in ear, nose and throat healthcare taking place right here at our ENT clinic.</p>
                    </div>
                    {
                        blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Blogs;
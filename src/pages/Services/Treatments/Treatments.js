import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Treatment from '../Treatment/Treatment';
import '../Treatment/Treatment.css';

const Treatments = () => {
    const [treatments, setTreatments] = useState([])

    useEffect(() => {
        fetch('./ent_db.json')
            .then(res => res.json())
            .then(data => setTreatments(data))
    }, [])
    return (
        <Container>
            <Row className='py-5'>
                <div className='text-center my-4'>
                    <h2 className='fw-bold title'>We specialise in Ear Nose & Throat</h2>
                    <p className='card-description'>Our aim is to provide specialist care by drawing from the 10 plus years of experience.</p>
                </div>
                {
                    treatments.map(treatment => <Treatment treatment={treatment} key={treatment.id}></Treatment>)
                }
            </Row>
        </Container>
    );
};

export default Treatments;
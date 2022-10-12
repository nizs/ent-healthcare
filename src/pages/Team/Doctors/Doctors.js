import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import '../../Services/Treatment/Treatment.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('./ent_doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
        <Container>
            <Row className='my-5 gy-4'>
                <div className='text-center my-4'>
                    <h2 className='fw-bold title'>ENT Healthcare Specialists</h2>
                    <p className='card-description'>Meet our Specialist at ENT Care Clinic, We specializes in proper diagnosis and ENT treatment for diseases affecting ear, nose and throat providing care for children and adults.</p>
                </div>
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </Row>
        </Container>
        </>
    );
};

export default Doctors;
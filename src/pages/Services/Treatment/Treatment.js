import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Treatment.css';

function Treatment({ treatment }) {
    const { serviceTitle, serviceDescription, serviceImg } = treatment;
    return (
        <>
            <Col sm={12} md={12} lg={6}>
                <div className='mb-3 border border-1 card'>
                    <div>
                        <img className='' src={serviceImg} alt="treatment_img" />
                    </div>
                    <div className='card-body p-4'>
                        <div className='card-title fw-normal'>{serviceTitle}</div>
                        <div className='card-description my-4'>
                            {serviceDescription}
                        </div>
                        <Button variant="primary">CHECK INFO</Button>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default Treatment;
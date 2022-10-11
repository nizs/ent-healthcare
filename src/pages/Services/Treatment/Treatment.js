import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Treatment.css';

function Treatment({ treatment }) {
    const { serviceTitle, serviceDescription, serviceImg, id } = treatment;
    const navigate = useNavigate();
    
    const handleTreatmentDetails = id => {
        navigate(`/servicedetails/${id}`);
    }
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
                        <Button onClick={ () => handleTreatmentDetails(id)} variant="primary">CHECK INFO</Button>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default Treatment;
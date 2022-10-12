import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../Services/Treatment/Treatment.css';
import Card from 'react-bootstrap/Card';

function Doctor({ doctor }) {
    const { doctorName, docDesignation, docImg } = doctor;
    const navigate = useNavigate();
    return (
        <>
            <Col sm={12} md={6} lg={4}>
                <Card className="bg-dark text-white border-0">
                    <Card.Img className="border-0 rounded-0" src={docImg} alt="Card image" />
                    <Card.ImgOverlay>
                        <div className='doc-card-overlay'>
                            <Card.Title>{doctorName}</Card.Title>
                            <Card.Text className='text-primary'>
                                {docDesignation}
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </>
    );
}

export default Doctor;
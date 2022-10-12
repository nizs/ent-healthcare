import Spinner from 'react-bootstrap/Spinner';

function Buffering() {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center my-5'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Buffering;
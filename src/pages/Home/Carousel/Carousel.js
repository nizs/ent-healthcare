import Carousel from 'react-bootstrap/Carousel';
import { BsChatRightQuote } from "react-icons/bs";
import '../Carousel/carousel.css';

function Testimonial() {
    return (
        <div className='testimonial py-5'>
            <div>
                <h1 className='text-center text-white fw-bold'>What patients says</h1>
                <h1 className='text-center my-2 text-white fw-bold testimonial-icon'><BsChatRightQuote /></h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption className='carousel p-5 ' >
                        <h3>Rebel Deo</h3>
                        <p className='testimonial-origin'>"Patients from Greece"</p>
                        <p className='testimonial-feedback'>“After taking your advice with regard to what I thought was Post Nasal Drip I started to take Gaviscon Advanced and within about four to five days of taking this before going to bed the problem cleared up.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='carousel p-5'>
                        <h3>Jhon Doe</h3>
                        <p className='testimonial-origin'>"Patients from US"</p>
                        <p className='testimonial-feedback'>“ I have been going to Comprehensive ENT for a very long time, so I figured I should write a review. The front desk staff is always nice and welcoming. Dr. Simons is so kind and great and if any problems occurs i know ENT Healthcare is there..”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='carousel p-5'>
                        <h3>Claudia</h3>
                        <p className='testimonial-origin'>"Patients from Finland"</p>
                        <p className='testimonial-feedback'>
                            “ The staff actually took time from their lunch hour to see me because I was there. I am and have always been extremely impressed with the professional and courteous care that I receive at your clinic.”
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Testimonial;
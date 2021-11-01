import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To The Trevel</h3>
                    <p className="w-50 mx-auto" >Welcome to our tourist agency your trip is not happy and comfortable</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Choose The Beat Tour Package</h3>
                    <p>Many of us are getting ready. In between, book by choosing the supply from your choice</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Travel To The Beautful Place</h3>
                <p className="w-50 mx-auto" >Select your favorite places like America Japan China Bangladesh Cox's Bazar Nice Place</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;
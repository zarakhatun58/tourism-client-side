import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleTourist from '../SingleTourist/SingleTourist';
import './Tourist.css';

const Tourist = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://lit-island-75424.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="add-Booking py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h6 className="text-danger">Popular Tour Package</h6>
                            <h1>Travel Most Popular Place In The World</h1>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                        <Spinner animation="Booking" />
                        :
                        <div className="row">
                            {
                                services.map(service => <SingleTourist
                                    key={service._id}
                                    service={service}
                                ></SingleTourist>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Tourist;
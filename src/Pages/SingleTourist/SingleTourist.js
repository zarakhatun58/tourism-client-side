import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTourist.css';

const SingleTourist = ({ service }) => {
    const {_id,time,name,price,description,img} = service;
    return (
        <div className="col-lg-4">
            <div className="card mb-3 single-service p-3">
                <img src={img} alt="" />
                <div className="d-flex justify-content-between my-3">
                     <h3 className="my-3">{name}</h3>
                </div>
                <h3>Time: {time}</h3>
                <h3>Price: {price}</h3>
                <p className="text-justify">{description.slice(0,80)}</p>
                <div className="text-center">
                    <Link to={`/Booking/${_id}`}>
                        <button className="btn btn-primary text-center text-white">Booking Now</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default SingleTourist;
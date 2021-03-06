import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';


const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const [Booking, setBooking] = useState({});
    useEffect(() => {
        fetch(`https://lit-island-75424.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [id])
    const onSubmit = data => {
        const BookingId = id;
        data.Booking = BookingId;
        const price = Booking.price;
        data.price = price;

        fetch('https://lit-island-75424.herokuapp.com/Booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking processed Successfully');
                    reset();
                }
            })
    };
    return (
        <>
            <div className="works-area py-5">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2>Your Booking</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="place-single">

                                <img className="img-fluid" src={Booking.img} alt="" />

                                <p>Booking Id: {id}</p>
                                <h2 className="text-capitalize">{Booking.name}</h2>
                                <h6>Price: {Booking.price}</h6>
                                <p className="text-justify">{Booking.description}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="place-single">
                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                    <input className="form-control mb-3" defaultValue={user.displayName} {...register("name")} />

                                    <input className="form-control mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                                    {errors.email && <span className="error">This field is required</span>}
                                    <input className="form-control mb-3" placeholder="Status" defaultValue={"pending"} {...register("status")} />

                                    <input className="form-control mb-3" placeholder="Address" defaultValue="" {...register("address")} />
                                    <input className="form-control mb-3" placeholder="City" defaultValue="" {...register("city")} />
                                    <input className="form-control mb-3" placeholder="phone number" defaultValue="" {...register("phone")} />

                                    <input className="btn btn-success px-5" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Booking;
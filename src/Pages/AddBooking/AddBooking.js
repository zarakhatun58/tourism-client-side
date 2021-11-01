import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddBooking.css';

const AddBooking = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghostly-goosebumps-39347.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-Booking py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Add A Booking Menu</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-Booking">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name")} placeholder="Name" required />
                            <input className="form-control mb-3" type="number" {...register("price")} placeholder="price" required/>
                            <textarea className="form-control mb-3" {...register("description")} placeholder="Description" required/>
                            <input className="form-control mb-3" {...register("img")} placeholder="image url" required/>
                            <input className="btn btn-success" type="submit" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;
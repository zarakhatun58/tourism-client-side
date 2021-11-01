import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './MyBookings.css';
const MyBookings = () => {
    const { user } = useFirebase();
    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch(`https://lit-island-75424.herokuapp.com/myBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user.email])

    const handleCancel = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `https://lit-island-75424.herokuapp.com/myBookings/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = myBookings.filter(Booking => Booking._id !== id);
                        setMyBookings(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="my-Booking-area py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>My Bookings</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="Booking-single">
                            <Table striped Bookinged>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myBookings.map(Booking => <tr key={Booking._id}>
                                            <td>{Booking._id}</td>
                                            <td>{Booking.name}</td>
                                            <td>{Booking.price}</td>
                                            <td>{Booking.status}</td>
                                            <td>
                                                <button onClick={() => handleCancel(Booking._id)} className="btn btn-danger ms-2">Cancel</button>
                                            </td>
                                        </tr>
                                        )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
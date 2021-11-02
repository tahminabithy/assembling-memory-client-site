import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const [mybooking, setMyBooking] = useState([]);
    useEffect(() => {
        fetch(`https://fierce-brushlands-37321.herokuapp.com/touristInfo/${user?.email}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setMyBooking(data))
    }, [user.email])

    const handleDelete = (id) => {
        fetch(`https://fierce-brushlands-37321.herokuapp.com/touristInfo/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const warning = window.confirm("Do you want to cancel the booking?");
                if (warning) {
                    alert('booking successfully cancel')
                    const remainingBookings = mybooking.filter(booking => booking._id !== id);
                    setMyBooking(remainingBookings)
                }
            })
    }

    return (
        <div className='container'>
            <h1 className='text-center sec3-font my-4'>My Bookings</h1>
            <div className='table-responsive'>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Address</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Spent Days</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    {
                        mybooking?.map((booking, index) => (
                            <tbody>
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.address}</td>
                                    <td>{booking.destination}</td>
                                    <td>{booking.days}</td>
                                    <td>{booking.status}</td>
                                    <td>
                                        <button onClick={() => handleDelete(booking._id)} type="button" class="btn btn-outline-light m-2">Cancel</button>
                                    </td>
                                </tr>
                            </tbody>))
                    }



                </table>
            </div>


        </div>
    );
};

export default MyBookings;
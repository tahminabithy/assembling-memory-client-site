import React, { useEffect, useState } from 'react';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        fetch('https://fierce-brushlands-37321.herokuapp.com/touristInfo', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [isUpdate])

    const handleDelete = (id) => {
        fetch(`https://fierce-brushlands-37321.herokuapp.com/touristInfo/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const warning = window.confirm("Do you want to cancel the booking?");
                if (warning) {
                    alert('booking successfully cancel')
                    const remainingBookings = bookings.filter(booking => booking._id !== id);
                    setBookings(remainingBookings)
                }
            })
    }
    const handleUpdate = (id) => {
        const data = { status: "Approved" };
        fetch(`https://fierce-brushlands-37321.herokuapp.com/touristInfoo/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('modified successfully')
                    setIsUpdate(true);
                }
            })
    }
    return (
        <div className='container'>
            <h1 className='text-center sec3-font my-3'>All Bookings</h1>
            <div className='table-responsive'>
                <table class="table table-success table-striped">
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
                            <th scope="col">Booking</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    {
                        bookings?.map((booking, index) => (
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
                                        <button onClick={() => handleDelete(booking._id)} type="button" class="btn btn-outline-success m-2">Cancel</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(booking._id)} type="button" class="btn btn-outline-success m-2">Confirm</button>
                                    </td>


                                </tr>
                            </tbody>))
                    }



                </table>

            </div>

        </div>
    );
};

export default AllBookings;
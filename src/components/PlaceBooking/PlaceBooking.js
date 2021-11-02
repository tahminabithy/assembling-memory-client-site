import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
const PlaceBooking = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [place, setPlace] = useState([]);
    useEffect(() => {
        fetch(`https://fierce-brushlands-37321.herokuapp.com/places/${id}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "pending"
        console.log(data);
        fetch('https://fierce-brushlands-37321.herokuapp.com/touristInfo', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('submit successfully')
                    reset();
                }
            })
    }
    return (
        <div className='mt-5'>
            <div className='row g-5 '>
                <div className='col-lg-3 col-12 '>
                    <div className='shadow-lg p-2 mt-4 bg-warning'>
                        <h5 className='sec3-font'>Choose Your destination place</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.email} className='mt-4 px-5 py-2'  {...register("email")} placeholder='Email' />
                            <br />
                            <input defaultValue={user?.displayName} className='mt-2 px-5 py-2' {...register("name")} placeholder='User name' />
                            <br />
                            <input defaultValue={new Date()} className='mt-2 px-5 py-2' {...register("date")} placeholder='User name' />
                            <br />
                            <input className='mt-2 px-5 py-2' {...register("address")} placeholder='Address' />
                            <br />
                            <input className='mt-2 px-5 py-2' {...register("destination")} placeholder='Chosen Place' />
                            <br />
                            <input type="number" className='mt-2  py-2' {...register("days")} placeholder='spent days' />
                            <br />
                            <input className='mt-2 px-5 py-1 mx-5 bg-dark text-light rounded' type="submit" />
                        </form>
                    </div>

                </div>
                <div className='col-lg-9 col-12 mt-5'>
                    <div className='row shadow-lg p-5 '>
                        <div className='col-lg-6 col-12'>
                            <h3 className='sec3-font'>{place.name}</h3>
                            <h5 className='sec3-font text-primary'>{place.places}</h5>
                            <div>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </div>
                            <p>{place.description}</p>
                            <div className='mt-3 sec3-font'>
                                <i class="fas fa-utensils mx-2"></i>
                                <span className='text-primary fw-bold' >Foods</span>
                                <i class="fas fa-hotel mx-2"></i>
                                <span className='text-primary fw-bold'>Hotels</span>
                                <i class="fas fa-plane mx-2"></i>
                                <span className='text-primary fw-bold'>Airport</span>
                            </div>
                            <h5 className='mt-4 sec3-font'>Rate: <span className='text-warning'> ${place.price}</span></h5>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img src={place.img} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PlaceBooking;
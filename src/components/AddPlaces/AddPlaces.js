import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const AddPlaces = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fierce-brushlands-37321.herokuapp.com/places', data)
            .then(res => console.log(res))
    }


    return (
        <div className='d-flex justify-content-center mt-5  '>
            <div className='shadow-lg p-5 bg-secondary'>
                <h3>Please Add your place</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mt-4 px-5'  {...register("name")} placeholder='place name' />
                    <br />
                    <input className='mt-2 px-5' {...register("img")} placeholder='image link' />
                    <br />
                    <input className='mt-2 px-5' {...register("description")} placeholder='description' />
                    <br />
                    <input className='mt-2 px-5' {...register("price")} placeholder='price' />
                    <br />
                    <input className='mt-2 px-5' {...register("places")} placeholder='country name' />
                    <br />
                    <input className='mt-2 px-5 mx-5' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddPlaces;
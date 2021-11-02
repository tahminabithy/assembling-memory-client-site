import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'
const Place = (props) => {
    const { name, description, img, price, places, _id } = props.place;
    return (
        <div class="col shadow-lg">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title sec3-font">{name}</h5>
                    <div>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                    </div>
                    <div className='mt-3'>
                        <i class="fas fa-utensils mx-2"></i>
                        <span className='text-primary fw-bold' >Foods</span>
                        <i class="fas fa-hotel mx-2"></i>
                        <span className='text-primary fw-bold'>Hotels</span>
                        <i class="fas fa-plane mx-2"></i>
                        <span className='text-primary fw-bold'>Airport</span>
                    </div>
                    <p class="card-text mt-2"><small>{description}</small></p>


                </div>
                <div class="card-footer">

                    <Link to={`/placebooking/${_id}`}>
                        <button type="button" class="btn btn-secondary  mx-5 px-5">Book Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Place;
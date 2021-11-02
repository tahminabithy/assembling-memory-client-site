import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Place from '../Place/Place';
import './Home.css'
const Home = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://fierce-brushlands-37321.herokuapp.com/places', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
                setIsLoading(false);
            })
    }, [])
    return (
        <div>
            <div className='home-banner d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='text-light text-style mb-3 fw-bold'>Assembling Memories</h1>
                    <p className='text-light text-style text-center'>One’s destination is never a place, but a new way of seeing things.</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button" class="btn btn-outline-dark px-3 mt-3">Discover The Tour</button>
                    </div>


                </div>

            </div>
            {/* services */}
            {
                isLoading ? <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : ''
            }
            <div className='container mt-5'>
                <div className='text-center sec3-font mb-5 pb-4 '>
                    <h1>Welcome to Assembling Memories
                    </h1>
                    <p><small className='text-secondary'>Highest level of service you can find</small></p>
                </div>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        places.map(place => <Place
                            key={place._id}
                            place={place}></Place>)
                    }
                </div>
            </div>
            <section className='container my-5 shadow-lg x'>
                <div className='row '>
                    <div className="col-lg-9 col-12 p-3 bg-color">
                        <p ><small>Best agency</small></p>
                        <hr />
                        <h1 className='sec3-font'>Why Choose <span className='text-warning'>Assembling Memories</span></h1>
                        <p className='sec3-font'>Assembling Memories Furthermore, We have forty tourist spots offering where you will have multiple options. If you love to travel then Assembling Memories is the best agency which will help you to reach your chosen destination.Besides we provide multiple packages in on season times.
                            <br /> Furthermore, We have forty tourist spots offering where you will have multiple options.We ensure your safe and peaceful journey to your destination.Furthermore, We have forty tourist spots offering where you will have multiple options.
                            <br />
                            We have seven years experinecs .Furthermore, We have forty tourist spots offering where you will have multiple options. Above all we provide best service in cheaper cost.
                        </p>
                        <div >
                            <h5 className='sec3-font text-primary underline'>Make Your vacations special</h5>
                        </div>




                    </div>
                    <div className="col-lg-3 col-12 py-5 bg-dark">
                        <i class="fas fa-globe text-warning fs-1"></i>
                        <h5 className='text-light sec3-font mt-2'>Trust and Safety</h5>
                        <p className='text-light sec3-font '><small>All our bus and car come directly from dealers and go through lots of  testing and checking before they arrive at your door</small></p>
                        <i class="fas fa-plane-departure text-warning fs-1"></i>
                        <h5 className='text-light sec3-font mt-2'>Packages 5,000+</h5>
                        <p className='text-light sec3-font '><small>we provide multiple packages in on season times. We ensure your safe and peaceful journey to your destination</small></p>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-tems-center'>
                            <div className='row'>
                                <div className="col-lg-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h4 className='text-center '>Our Happy Tourists</h4>
                <p className=' text-center'><small className='text-secondary'>What people say about us</small></p>
                <div className="row">
                    <div className="col-lg-4 col-12 ">
                        <div className=' mt-5 shadow-lg rounded-3'>
                            <div className='text-center mb-5 pb-4  rounded-3 '>
                                <div className='pb-3'>
                                    <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" className='img-fluid img-size rounded-circle' alt="" />
                                </div>
                                <div>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                </div>
                                <p className='text-secondary' >" We are very happy and satisfied by the services provided by the Assembling memories .They are provide best service in cheaper cost "</p>
                                <p><small className='text-primary'>Tahmina Akter</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className=' mt-5 shadow-lg  rounded-3'>
                            <div className='text-center mb-5 pb-4 '>
                                <div className='pb-3'>
                                    <img src="https://www.face.eu/wp-content/uploads/2018/09/Torbjorn-Larsson.jpg" className='img-fluid img-size rounded-circle' alt="" />
                                </div>
                                <div>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                </div>
                                <p className='text-secondary' >" We are very happy and satisfied by the services provided by  the Assembling memories .They are provide best service in cheaper cost "</p>
                                <p><small className='text-primary'>John william</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className=' mt-5 shadow-lg  rounded-3'>
                            <div className='text-center mb-5 pb-4 '>
                                <div className='pb-3'>
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='img-fluid img-size rounded-circle' alt="" />
                                </div>
                                <div>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                </div>
                                <p className='text-secondary' >" We are very happy and satisfied by the services provided by the Assembling memories .They are provide best service in cheaper cost "</p>
                                <p><small className='text-primary'>Tanjil Khan</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Home;
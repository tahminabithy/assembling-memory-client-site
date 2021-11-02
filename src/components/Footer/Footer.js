import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 pt-4 bg-dark h-100  size'>
            <div className='row'>
                <div className='col-lg-4 col-12'>
                    <div className='d-flex justify-content-center align-items-center' >
                        <div>
                            <p className='fw-bold text-warning'>LOCATIONS</p>
                            <p className='text-light'><small>Location1</small></p>
                            <p className='text-light'><small>90/2, Mohakhali, Gulshan</small></p>
                            <p className='text-light'><small>Location2</small></p>
                            <p className='text-light'><small>75/3 Mirpur,Dhaka</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='d-flex justify-content-center align-items-center' >
                        <div>
                            <p className='fw-bold text-warning'>FOLLOW US</p>
                            <p><span><i class="fab fa-facebook me-3 text-primary "></i><i class="fab fa-youtube me-3 text-danger"></i><i class="fab fa-instagram text-primary"></i></span> </p>

                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='d-flex justify-content-center align-items-center' >
                        <div>
                            <p className='fw-bold text-warning'>CONTACT</p>
                            <p className='text-light'>Phone : 03726789382</p>
                            <p className='text-light'><small>Email : assemblingMemories@gmail.com</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-light d-flex justify-content-center align-items-center'><small><i class="far fa-copyright"></i> 2021 All Rights Reserve Terms of Use</small></p>
            </div>

        </div>
    );
};

export default Footer;
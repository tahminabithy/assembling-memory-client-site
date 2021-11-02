import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { user, signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className='login-banner'>
            <div className='d-flex justify-content-center align-item-center'>
                <div className=' p-5'>
                    <h3 className='mb-3 heading'>Please Sign In</h3>
                    <form >
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />

                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password' />
                        </div>
                        <button onClick={handleGoogleSignin} type="button" class="btn btn-outline-dark my-3 w-100">
                            <i class="fab fa-google me-2"></i> Google SignIn</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
      
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const password = React.useRef({});
    password.current = watch('password', '');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: data.name, email: data.email }
                
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'your Register successfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            
                        }
                        navigate(from, { replace: true });
                    });
                })    
    }

    return (
        <div>
            <Helmet><title>Translang | Sign up</title></Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <p className="text-red-400">Please enter a name.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <p className="text-red-400">Photo URL is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-red-400">Please enter an email.</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>//?])/i
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be at least 6 characters.</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-400">Password should not contain uppercase letters or special characters.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name="passwordConfirm" {...register('passwordConfirm', {
                                    required: true,
                                    validate: value => value === password.current || 'The passwords do not match.'
                                })} placeholder="confirm password" className="input input-bordered" />
                                {errors.passwordConfirm && <p className="text-red-400">The passwords do not match.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        Already have an account? Please<Link to="/login"> Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = data => {
        
        console.log(data);
    }
    
    return (
        <div>
            <Helmet>Translang | Sign up</Helmet>
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
                                {errors.name && <p className="text-red-400">Please enter for name.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotURL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <p className="text-red-400">Photo url is requered.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-red-400">Please enter for email.</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password', {
                                    required: true, minLength: 6,
                                    pattern: /(?=.*[a-z])(?=.*[0-9])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className="text-red-400">password must be 6 characters.</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-400">password do not any uppercase and special characters.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password', {
                                    required: true, confirm: true,
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.confirm === 'true' && <p className="text-red-400">password do not match.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        Already have account? please<Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
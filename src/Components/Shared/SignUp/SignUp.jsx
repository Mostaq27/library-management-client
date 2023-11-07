import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Lottie from 'lottie-react';
import animation from "../../../assets/loginAnimation.json"
const Signup = () => {

    const { register, getValues, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                // console.log(data.photo)
                    .then(() => {

                        // const saveUser = { name: data.name, email: data.email, image: data.photo, role: 'student' }

                        // axiosSecure.post('/users', saveUser)
                        //     .then(data => {
                        //         if (data.insertedId) {
                        //             reset();
                        //             Swal.fire({
                        //                 position: 'top-end',
                        //                 icon: 'success',
                        //                 title: 'Account created succcessfully',
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             })
                        //         }
                        //     })
                        navigate('/');

                    })
            }).catch(error => {
                Swal.fire(`${error.message}`)
                // console.log(error.message);
            })
    };

    return (
      <div className='min-h-screen hero bg-base-200'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-2/4 mr-12">
                    <Lottie animationData={animation}></Lottie>
                </div>
            <div className='border-2 border-solid md:w-2/3 mx-auto p-3 mb-3'>
            <h1 className='text-5xl font-bold text-center'>Sign up !</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photo && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true, pattern: /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+])[A-Za-z\d@#$!%^&*()_+]{6,}$/i
                        })} placeholder="Password" className="input input-bordered" />
                        {errors.password?.type === 'pattern' && <p className="text-red-500">More than 6 digit with capital latter & special character</p>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" {...register("cpassword", {
                            required: true, minLength: 6, maxLength: 20, validate: (value) => {
                                const { password } = getValues();
                                return password === value || "Passwords should match!";
                            }
                        })} placeholder="Password again" className="input input-bordered" />
                        {errors.cpassword && <span className="text-red-500">{errors.cpassword.message}</span>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 cherecter</p>}
                    </div>
                    <div className="form-control mt-4">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                        <div className='text-center mt-3'>Already have an account? <Link to='/login'><span className='text-blue-600'>Login</span></Link></div>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default Signup;
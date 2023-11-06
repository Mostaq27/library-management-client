
import React from 'react'
import { Link } from 'react-router-dom'
import animation from "../../../assets/loginAnimation.json"
import Lottie from 'lottie-react'
import SocialLogin from '../SocialLogin/SocialLogin'

const Login = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <Lottie animationData={animation}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        required
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <p className="text-red-600">  </p>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-outline"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            <p className="my-4 text-center">
                                New to Tech Point..
                                <Link className="text-orange-600 font-bold ms-1" to="/signup">
                                    Sign Up
                                </Link>
                            </p>
                            {/* <p className="my-4 text-center text-red-700">{error}</p> */}
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
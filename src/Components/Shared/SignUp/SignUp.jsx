
import Lottie from "lottie-react";
import animation from "../../../assets/loginAnimation.json"
import { Link } from 'react-router-dom';
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2 mr-12">
                        <Lottie animationData={animation}/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="photo url"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
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
                                    <p className="text-red-600"> </p>

                                    {/* <div class="flex items-center mt-2">
                                        <input id="link-checkbox" onClick={handleTerm} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="link-checkbox" class="ml-2 text-sm font-medium ">Accecpt term & conditions </label>
                                    </div> */}

                                </div>

                                {/* <div className="form-control mt-6">
                                    <input
                                        disabled={!accecpted}
                                        className="btn btn-outline"
                                        type="submit"
                                        value="Sign Up"

                                    />
                                </div> */}
                            </form>
                            <p className="my-4 text-center">
                                Already Have an Account?
                                <Link className="text-orange-600 font-bold" to="/login">
                                    Login
                                </Link>
                                {/* <p className="my-4 text-center text-red-600">{error}</p> */}
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SignUp;
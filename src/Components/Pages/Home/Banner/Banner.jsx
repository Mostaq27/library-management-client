

import "./Banner.css";
// import banner from "../../../../assets/banner.png";
import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import bannerAnimation from "../../../../assets/bannerAnimation.json"
import Typewriter from "react-ts-typewriter";

const Banner = () => {
    return (
        <div className="banner">
            <div className="flex flex-col-reverse lg:flex-row justify-between p-20">
                <div>
                    <h1 className="text-white text-4xl font-bold">Your library ,<br /> Your way to future</h1>

                    <p className="text-orange-100 my-4 text-2xl font-semibold">
                        <Typewriter text='Read books for a better future with knowledge, imagination and idea.'
                            loop={true}
                            // cursor={true}
                            delay={800}
                            speed={100} 
                            /></p>
                    <div className="flex gap-1">
                        <Link to='/allbooks'><button className="btn bg-orange-200 btn-warning text-black m-3">Explore More</button></Link>
                        <Link to='signup'><button className="btn btn-success m-3">Signup</button></Link>
                    </div>
                </div>
                <div>
                    <Lottie animationData={bannerAnimation} className="h-[350px]"></Lottie>

                </div>
            </div>
        </div >
    );
};

export default Banner;
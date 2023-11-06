import "./NotFound.css"

import notFound from "../../../assets/404Animation1.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className='notFound'>
        <div className='flex flex-col gap-10 h-screen justify-center items-center'>
           
            <Lottie animationData={notFound} className='w-50 h-[600px]'></Lottie>
        <Link to='/'><button className="btn btn-primary capitalize"> Back to Home </button></Link>
        </div>
        <div className="pb-24">

        </div>
    </div>
    );
};

export default NotFound;
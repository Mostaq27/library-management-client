

import { FaAddressCard } from 'react-icons/fa';
import { ImBooks } from "react-icons/im";
import { IoBookOutline } from "react-icons/io5";
import { motion } from 'framer-motion';


const About = () => {
    return (
        <div>
            <div className="text-center space-x-5 p-6">
                <h2 className="text-5xl font-bold pb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae <br /> est Sed non eros elementum nulla sodales ullamcorper.</p>
            </div>



            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <motion.div whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.3 } }}>

                        <img src="https://i.ibb.co/D9mkXd2/pretty-brunette-schoolgirl-standing-holding-yellow-backpack-folder-1.jpg" className="max-w-sm rounded-lg shadow-2xl h-[500px] w-[400px] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <FaAddressCard className='h-8 w-12 text-blue-600'></FaAddressCard>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Member Card</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <svg className="w-7 h-7 text-gray-500 dark:text-blue-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">High Quality Books</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <IoBookOutline className="h-8 w-12 text-sky-600"></IoBookOutline>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Free All Books</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1,  transition: { duration: 0.3 } }} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <ImBooks className='h-8 w-12 text-blue-600'></ImBooks>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Up To Date Books</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
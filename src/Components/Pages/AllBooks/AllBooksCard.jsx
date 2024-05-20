
import { Rating } from '@smastrom/react-rating';
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllBooksCard = ({ card }) => {
    const { photo, author, book, rating, category, _id } = card;
    return (
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <div className="flex flex-col items-center  border  rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
                <img className="object-cover w-full rounded-t-lg h-72  md:w-48 md:rounded-none md:rounded-l-lg"
                 src={photo} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="text-2xl font-bold  dark:text-gray-200">{book}</h5>
                    <p className="mb-3 font-normal  dark:text-gray-400">by {author}</p>
                    <h5 className="text-lg font-medium  dark:text-gray-400">
                        <span className='font-bold'>Category: </span>{category}</h5>
                    <div className="  items-center py-4 ">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />

                    </div>
                    <Link to={`/update_book/${_id}`}>
                    <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </p>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default AllBooksCard;
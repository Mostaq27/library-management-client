import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from 'framer-motion';


const Bookdetails = () => {
    const [findData, setFindData] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const { photo, author, book, rating, category, _id, description, quantity } = findData;
    console.log(findData)
    const { id } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const findItem = data.find(books => books._id == id)
                setFindData(findItem)
                setIsLoading(false)
            })
    }, [id])
    return (
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <div className="flex justify-center py-10">
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96  md:w-60 md:rounded-none md:rounded-l-lg" src={photo} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="text-2xl font-bold text-gray-700 dark:text-gray-400">{book}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">by {author}</p>
                        {/* <h5 class="text-2xl font-bold text-gray-700 dark:text-gray-400">{category}</h5> */}
                        <div className="  items-center py-4 ">
                            <Rating
                            className="pb-4"
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                            />
                            <h5 class="text-sm font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Short Description: </span>{description?.slice(0, 90)}<span className="font-bold text-blue-700">...</span></h5>
                            <h5 class="text-sm font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Quantity: </span>{quantity}</h5>

                        </div>
                        <div className=" flex gap-12">
                        <Link to={`/read_book/${_id}`}>
                            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </p>
                        </Link>
                        <Link to={`/details/${_id}`}>
                            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            borrow
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </p>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Bookdetails;
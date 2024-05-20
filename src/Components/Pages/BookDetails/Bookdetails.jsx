import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Bookdetails = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [findData, setFindData] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const { photo, author, book, rating, category, _id, description, quantity } = findData;
    // console.log(findData)
    const { id } = useParams()

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        fetch('https://library-management-system-server-bay.vercel.app/Books')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const findItem = data.find(books => books._id == id)
                setFindData(findItem)
                setIsLoading(false)
            })
    }, [id])

    const handleModal = e => {
        e.preventDefault()
        const form = e.target
        const returnBook = form.return.value
        const borrowBook = form.borrow.value
        const user = form.user.value
        const email = form.email.value
        const borrowedBook = { returnBook, borrowBook, user, email, photo, category, book }

        axios.post("https://library-management-system-server-bay.vercel.app/borrow", borrowedBook)
            .then(res => {
                if (res.data.insertedId) {

                    const updatedQuantity = quantity - 1;
                    console.log(updatedQuantity)

                    axios.patch(`https://library-management-system-server-bay.vercel.app/books/${_id}`, { quantity: updatedQuantity })
                        .then(res => {
                            navigate("/borrowed")
                            console.log("updated quantity:", res.data)
                        })


                    toast.success("Book added successfully.")
                }
                console.log(res.data)
            })

    }

    return (
        <>
            <Toaster />
            <Helmet>
                <title>Book_Detail | SUSIS Library</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center py-12">Details: <span className="text-yellow-500">{book}</span></h2>
            {
                isLoading ? <div className="justify-center items-center flex py-20">
                    <RingLoader
                        color="hsla(10, 91%, 27%, 1)"
                        cssOverride={{}}
                        loading
                        size={74}
                        speedMultiplier={1}
                    />
                </div>
                    :
                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                        <div className="flex justify-center py-10">
                            <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl
                              dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-500">
                                <img className="object-cover w-full rounded-t-lg h-96  md:w-60 md:rounded-none md:rounded-l-lg" src={photo} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="text-2xl font-bold  dark:text-gray-400">{book}</h5>
                                    <p className="mb-3 font-normal dark:text-gray-400">by {author}</p>
                                    {/* <h5 ClassName="text-2xl font-bold text-gray-700 dark:text-gray-400">{category}</h5> */}
                                    <div className="  items-center py-4 ">
                                        <Rating
                                            ClassName="pb-4"
                                            style={{ maxWidth: 120 }}
                                            value={rating}
                                            readOnly
                                        />
                                        <h5 className="text-sm font-normal dark:text-gray-400">
                                            <span className="font-bold">Short Description: </span>{description?.slice(0, 100)}
                                            <span className="font-bold text-blue-500">...</span></h5>
                                        <h5 className="text-sm font-normal  dark:text-gray-400">
                                            <span className="font-bold">Quantity: </span>{quantity}
                                            </h5>

                                    </div>
                                    <div className=" flex gap-12">
                                        <Link to={`/read_book/${_id}`}>
                                            <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </p>
                                        </Link>

                                        <button disabled={quantity <= 0} onClick={() => document.getElementById('my_modal_5').showModal()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            borrow
                                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                {/* form return date and borrow date row */}
                                                <form onSubmit={handleModal}>

                                                    <div className="md:flex mb-8">
                                                        <div className="form-control md:w-1/2 ml-4">
                                                            <label className="label">
                                                                <span className="label-text">Return Date</span>
                                                            </label>
                                                            <label className="input-group">

                                                                <input type="date" name="return" placeholder="Return Date" 
                                                                className="input input-bordered w-full" required />
                                                            </label>
                                                        </div>
                                                        <div className="form-control md:w-1/2 ml-4">
                                                            <label className="label">
                                                                <span className="label-text">Borrowed Date</span>
                                                            </label>
                                                            <label className="input-group">

                                                                <input type="date" name="borrow" placeholder="Borrowe Date" 
                                                                className="input input-bordered w-full" required />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {/* form User name and User emaail  row */}
                                                    <div className="md:flex mb-8">
                                                        <div className="form-control md:w-1/2 ml-4">
                                                            <label className="label">
                                                                <span className="label-text">User Name</span>
                                                            </label>
                                                            <label className="input-group">

                                                                <input type="text" 
                                                                name="user" 
                                                                placeholder="User Name" 
                                                                defaultValue={user?.displayName} 
                                                                className="input input-bordered w-full" />
                                                            </label>
                                                        </div>
                                                        <div className="form-control md:w-1/2 ml-4">
                                                            <label className="label">
                                                                <span className="label-text">User Email</span>
                                                            </label>
                                                            <label className="input-group">

                                                                <input type="email" 
                                                                name="email" 
                                                                defaultValue={user?.email} 
                                                                placeholder="User Email"
                                                                 className="input input-bordered w-full" />
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="modal-action flex">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button type="submit" className="btn">close</button>
                                                        </form>
                                                        <input className="btn " type="submit" value="Submit" />
                                                    </div>

                                                </form>
                                            </div>
                                        </dialog>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            }
        </>
    );
};

export default Bookdetails;



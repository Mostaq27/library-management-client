import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";



const BorrowedCard = ({ borrow }) => {
        const [books,setBooks] = useState({})
        const{quantity} = books || {}
    const { photo, returnBook, borrowBook, user, email,book,category,_id } = borrow;

   

        useEffect(()=>{
            axios.get("https://library-management-system-server-bay.vercel.app/books")
            .then(res=>{
                const filteredData = res.data.find(item=>item.category===category && item.book===book)
                setBooks(filteredData)
            })
        },[category,book])

       

      

       

    const handleReturn = id =>{
        axios.delete(`https://library-management-system-server-bay.vercel.app/borrow/${id}`)
        .then(res=>{

            if(res.data.deletedCoun > 0){

                const updatedQuantity = quantity + 1;
                console.log(updatedQuantity)

                axios.patch(`https://library-management-system-server-bay.vercel.app/books/${books._id}`,{ quantity: updatedQuantity })
                .then(res=>{
                    console.log("updated quantity:",res.data)
                })

                toast.success("return book successfully")

            }
            console.log(res.data)
           
        })
    }
    

    return (
        <>
        <Toaster />
            <div className="relative flex w-full max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md md:flex-row">
                <div className="relative  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border lg:w-2/4">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-full sm:h-52 md:h-80"
                    />
                </div>
                <div className="p-6">
                    <div className=" flex gap-4 justify-between">
                    <h6 className="block mb-4  text-sm antialiased font-semibold leading-relaxed tracking-normal text-pink-500 capitalize">
                        Borrow: <br/>{borrowBook}
                    </h6>
                    <h6 className="block mb-4  text-sm antialiased font-semibold leading-relaxed tracking-normal text-pink-500 capitalize">
                        Return: <br /> {returnBook}
                    </h6>
                    </div>
                    <h4 className="block mb-2 text-2xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        Book: {book}
                    </h4>
                    <p className="block mb-8 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
                       Cayegory: {category}
                    </p>
                    <a className="inline-block" >
                        <button onClick={()=>handleReturn(_id)}
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                           Return
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
                <Toaster />
            </div>
        </>
    );
};

export default BorrowedCard;
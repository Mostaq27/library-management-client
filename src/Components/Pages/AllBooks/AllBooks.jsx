import { useEffect, useState } from "react";
import AllBooksCard from "./AllBooksCard";
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import Typewriter from "react-ts-typewriter";



const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        fetch(`https://library-management-system-server-bay.vercel.app/books`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooks(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            <Helmet><title>All_Books | RMSTU Central Library</title></Helmet>
            <div className="pb-10">
                <div className="text-center space-y-7 py-5">
                    <h2 className="text-5xl font-bold text-center">All books</h2>
                    <p className="text-blue-800 my-4 text-xl font-semibold">
                        <Typewriter text='Read books And Gain knowledge.'
                            loop={true}
                            // cursor={true}
                            delay={800}
                            speed={100} 
                            /></p>
                    {/* <Marquee pauseOnHover={true} speed={100}>
                        <p className="text-blue-800">Read books And Gain knowledge</p>
                    </Marquee> */}
                </div>
                {
                    isLoading ? <div className="  justify-center items-center flex py-20">
                        <RingLoader
                            color="hsla(10, 91%, 27%, 1)"
                            cssOverride={{}}
                            loading
                            size={74}
                            speedMultiplier={1}
                        />
                    </div>
                        :


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                            {
                                books.map(card => <AllBooksCard
                                    key={card._id}
                                    card={card}></AllBooksCard>)
                            }
                        </div>
                }

            </div>
        </>
    );
};

export default AllBooks;
import { useEffect, useState } from "react";
import AllBooksCard from "./AllBooksCard";



const AllBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/books`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooks(data)
            })
    }, [])
    return (
        <div className="pb-10">
            <div className="text-center space-y-7 py-5">
                <h2 className="text-5xl font-bold text-center ">All books</h2>
                <p>Read books And Gain knowledge</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {
                    books.map(card => <AllBooksCard
                        key={card._id}
                        card={card}></AllBooksCard>)
                }
            </div>

        </div>
    );
};

export default AllBooks;
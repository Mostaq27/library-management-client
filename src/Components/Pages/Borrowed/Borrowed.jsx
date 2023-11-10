import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BorrowedCard from "./BorrowedCard";
import { RingLoader } from "react-spinners";




const Borrowed = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading,setLoading] = useState(true);


  axios.get('https://library-management-system-server-bay.vercel.app/borrow',)
    .then(res => {
      // console.log(res.data)
      setBorrowedBooks(res.data);
      setLoading(false)
    })

  return (
    <>
      <Helmet>
        <title>BorrowedBooks | SUSIS Library</title>
      </Helmet>
      <div>
        <div className="p-10">
          <h2 className="text-4xl font-bold text-center">Borrowed Books:{borrowedBooks.length}</h2>
        </div>
        {
          loading ? <div className="  justify-center items-center flex py-20">
            <RingLoader
              color="hsla(10, 91%, 27%, 1)"
              cssOverride={{}}
              loading
              size={74}
              speedMultiplier={1}
            />
          </div>
            :
            <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {
                borrowedBooks.map(borrow => <BorrowedCard
                  key={borrow._id}
                  borrow={borrow}></BorrowedCard>)
              }
            </div>
        }

      </div>
    </>
  );
};

export default Borrowed;
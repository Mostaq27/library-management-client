import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryBooksCard from "./CategoryBooksCard";
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet";



const CategoryBooks = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('https://library-management-system-server-bay.vercel.app/books')
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(book => book.category.toLowerCase() === category.toLowerCase())
        setBooks(filteredData)
        setLoading(false)

      })
  }, [])
  return (
    <>
      <Helmet><title>CategoryBooks | RMSTU Central Library</title></Helmet>
      <div>
        <div className="p-10">
          <h2 className="text-4xl font-bold text-center">Category: {category}</h2>
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
                books.map(bk => <CategoryBooksCard
                  key={bk._id}
                  bk={bk}></CategoryBooksCard>)
              }
            </div>
        }

      </div>
    </>
  );
}
  ;
export default CategoryBooks;
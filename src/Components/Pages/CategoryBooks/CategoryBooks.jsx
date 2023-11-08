import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryBooksCard from "./CategoryBooksCard";



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
      fetch('http://localhost:5000/books')
          .then(res => res.json())
          .then(data => {
              const filteredData = data.filter(book => book.category.toLowerCase() === category.toLowerCase())
              setBooks(filteredData)
              setLoading(false)

          })
  }, [])
  return (
    <div>
      <div className="p-10">
      <h2 className="text-4xl font-bold text-center">Category: {category}</h2>
      </div>
      <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
          books.map(bk=> <CategoryBooksCard
            key={bk._id}
            bk={bk}></CategoryBooksCard>)
          }
          </div>


    </div>
  );
}
;
export default CategoryBooks;
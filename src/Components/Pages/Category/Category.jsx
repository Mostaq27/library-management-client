import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCategory(data)
      })
  }, [])
  return (
    <div>
      <h2 className="text-5xl font-bold text-center py-10">Our Category</h2>
      <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-4 gap-5 ">

        {
          category.map(card => <CategoryCard
            key={card._id}
            card ={card}
          >

          </CategoryCard>)
        }
      </div>
    </div>
  );
};

export default Category;
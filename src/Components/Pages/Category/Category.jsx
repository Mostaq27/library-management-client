
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { RingLoader } from "react-spinners";

const Category = () => {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
        setLoading(false);
    }, 3000);
}, []);

  useEffect(() => {
    fetch(`https://library-management-system-server-bay.vercel.app/category`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCategory(data)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h2 className="text-5xl font-bold text-center py-10">Our Category</h2>
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
          <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {
              category.map(card => <CategoryCard
                key={card._id}
                card={card}
              >

              </CategoryCard>)
            }
          </div>
      }
    </div>
  );
};

export default Category;
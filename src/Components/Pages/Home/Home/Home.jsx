

import { motion } from 'framer-motion';
import Banner from '../Banner/Banner';
import TeamMember from './../TeamMember/TeamMember';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TeamMember></TeamMember>
      <div className='flex gap-10'>

        <motion.div whileHover={{ scale: 1.05, rotate: 30, transition: { duration: 0.3 } }} className="card w-96 bg-base-100 shadow-xl">
          <figure><img  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </motion.div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;
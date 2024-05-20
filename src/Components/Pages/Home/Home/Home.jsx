

import { motion } from 'framer-motion';
import Banner from '../Banner/Banner';
import TeamMember from './../TeamMember/TeamMember';
import FeedBack from '../FeedBack/FeedBack';
import Category from '../../Category/Category';
import About from '../About/About';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className=''>
      <Helmet><title>Home | RMSTU Central Library</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <TeamMember></TeamMember>
      <FeedBack></FeedBack>
    </div>

  )
}

export default Home;
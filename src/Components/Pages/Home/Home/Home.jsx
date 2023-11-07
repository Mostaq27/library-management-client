

import { motion } from 'framer-motion';
import Banner from '../Banner/Banner';
import TeamMember from './../TeamMember/TeamMember';
import FeedBack from '../FeedBack/FeedBack';
import Category from '../../Category/Category';
import About from '../About/About';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <TeamMember></TeamMember>
      <FeedBack></FeedBack>
    </div>

  )
}

export default Home;
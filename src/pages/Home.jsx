import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeMain from '../components/HomeMain';
import PopularDesigns from '../components/PopularDesigns';
import Footer from '../components/Footer';


const Home = () => {
  document.title = "Kayti Krochets - Home";

  return (
    <>
      <Navbar />
      <HomeMain />
      <PopularDesigns />
      <Footer />
    </>
  )
}

export default Home
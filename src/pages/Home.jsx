import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeMain from '../components/HomeMain';
import PopularDesigns from '../components/PopularDesigns';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => { document.title = "Kayti Krochets · Free Crochet Patterns"; }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomeMain />
      <PopularDesigns />
      <Footer />
    </div>
  )
}

export default Home

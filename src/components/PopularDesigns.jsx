import React from 'react';
import { Link } from 'react-router-dom';

const PopularDesigns = () => {
  return (
    <div className="pt-20 pb-40 bg-gray-100">
      <h2 className="text-3xl text-center font-semibold alex-font mb-12">Popular Designs:</h2>

      <div className="flex justify-center gap-10 px-6">
        <div className="text-center group">
          <Link to="/patterns/star-wrist-warmers">
            <img src="/images/star-warmer.jpg" className="home-video-box rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <p className="jeju-font mt-2 text-lg">Star Wrist Warmers</p>
          </Link>
        </div>

        <div className="text-center group">
          <Link to="/patterns/star-tote-bag">
            <img src="/images/star-tote-bag.jpg" className="home-video-box rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <p className="jeju-font mt-2 text-lg">Star Tote Bag</p>
          </Link>
        </div>

        <div className="text-center group">
          <Link to="/patterns/strawberry-airpods-case">
            <img src="/images/airpods.png" className="home-video-box rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <p className="jeju-font mt-2 text-lg">Strawberry AirPods Pouch</p>
          </Link>
        </div>
      </div>

      <div className="text-center jeju-font mt-16">
        <Link to="/pages/AllPatterns" className="view-more-button transition duration-300 hover:scale-105">
          View More
        </Link>
      </div>
    </div>
  );
};

export default PopularDesigns;

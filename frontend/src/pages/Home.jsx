/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
const Home = () => {
    const images = [
      assets.Parliament_1,
      assets.Parliament_2,
      assets.Parliament_3,
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 2000);
  
      return () => clearInterval(interval); 
    }, [images.length]);
  return (
    <div className="home">

      <div className="container">
            

      <div className="container" style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}>
      </div>

      <div className="content">
        <h1>Welcome to the Parliament</h1>
        <p>
          The Parliament is a place where you can learn about the history of the UK Parliament, how it works, and the people who work there.
        </p>

      </div>
    </div>
    </div>
  )
}

export default Home
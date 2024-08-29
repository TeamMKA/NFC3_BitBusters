/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import DrawerTemp from "../utils/widgets/DrawerTemp";

const Home = () => {
  const images = [
    assets.Parliament_1,
    assets.Parliament_2,
    assets.Parliament_3,
  ];
  const primaryItems = ['Politicians', 'State', 'Party'];
  const secondaryItems = ['Predictive Analysis', 'News Tracking', 'Recommendation System'];
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="home">
        <div
          className="container"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>

        <div className="content">
          <DrawerTemp items={primaryItems} secondaryItems={secondaryItems} drawerWidth={300} />
          <h1>Welcome to the Parliament</h1>
          <p>
            The Parliament is a place where you can learn about the history of
            the UK Parliament, how it works, and the people who work there.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

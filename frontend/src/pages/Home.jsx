/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import DrawerTemp from "../utils/widgets/DrawerTemp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import WorkflowTimeline from "../components/WorkflowTimeline";

const Home = () => {
  const images = [
    assets.Parliament_1,
    assets.Parliament_2,
    assets.Parliament_3,
  ];
  const primaryItems = [
    { text: 'Politicians', url: '/cards'},
    { text: 'State', url: '/' },
    { text: 'Party', url: '/' }
  ];
  const secondaryItems = [
    { text: 'Predictive Analysis', url: '/' },
    { text: 'News Tracking', url: '/' },
    { text: 'Recommendation System', url: '/' }
  ];

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
          <h1>Welcome to the Parliament</h1>
          <p>
            The Parliament is a place where you can learn about the history of
            the Inida Parliament, how it works, and the people who work there.
          </p>
         
        </div>
      </div>

      <div className="home2" >
      <DrawerTemp items={primaryItems} secondaryItems={secondaryItems} drawerWidth={300} />
      </div>
    </>
  );
};

export default Home;

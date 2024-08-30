/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import DrawerTemp from "../utils/widgets/DrawerTemp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import WorkflowTimeline from "../components/WorkflowTimeline";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const images = [
    assets.Parliament_1,
    assets.Parliament_2,
    assets.Parliament_3,
  ];
  const primaryItems = [
    { text: "Politicians", url: "/cards" },
    { text: "News", url: "/test" },
    { text: "Party", url: "/" },
  ];
  const secondaryItems = [
    { text: "Predictive Analysis", url: "/" },
    { text: "News Tracking", url: "/test" },
    { text: "Recommendation System", url: "/test" },
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
          style={{ position: "absolute",
            top: 0,
            left: "22vh",
            width:" 400vh",
            height: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter: "blur(1px) brightness(35%)", 
            zIndex: -1, padding : "0 -10rem",

            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>

        <div className="content">
          <h1>Welcome to MyNeta</h1>
          <p>
            MyNeta is a place where you can learn about the history of
            the Indian Politicians, how they work, and the people who support them.
          </p>
        </div>
        <DrawerTemp
          items={primaryItems}
          secondaryItems={secondaryItems}
          drawerWidth={300}
        />
      </div>

  

      <About />
      <Contact />
    </>
  );
};

export default Home;

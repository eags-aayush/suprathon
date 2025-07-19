import React, { useEffect } from "react";
import "./Home.css"; // Includes gradients, keyframes, .g1 to .g5, etc.

import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeatureHighlights from "../components/Home/FeatureHighlights";
import HowItWorks from "../components/Home/HowItWorks";
// import CallToAction from "../components/Home/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    const interBubble = document.querySelector(".interactive");
    let curX = 0, curY = 0, tgX = 0, tgY = 0;

    function move() {
      if (!interBubble) return;
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Gooey Background - Fixed */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden pointer-events-none">
        {/* Goo Filter */}
        <svg className="w-0 h-0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* Gooey Gradient Background */}
        <div className="w-full h-full gradient-bg">
          <div className="gradients-container">
            <div className="g1" />
            <div className="g2" />
            <div className="g3" />
            <div className="g4" />
            <div className="g5" />
            <div className="interactive" />
          </div>
        </div>
      </div>

      {/* Scrollable App Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeatureHighlights />
        <HowItWorks />
        {/* <CallToAction /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;

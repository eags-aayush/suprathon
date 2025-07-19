import React from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import TypingAnimation from "../../assets/typing.json"; 
import Resume from "../../assets/resume.svg"; 
import DeskScene from "../../assets/DeskScene.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-row md:flex-row items-center justify-center gap-10">
      <section
        className="relative h-fit mt-25 mb-25 md:m-0 md:h-screen bg-cover bg-center flex items-center 3/4"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2018_Kerala_floods_rescue_operations.jpg/1920px-2018_Kerala_floods_rescue_operations.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            InterviewIQ
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6">
            Your all in one interview platform.
          </p>
          <p className="text-md md:text-lg mb-8 max-w-2xl mx-auto md:text-left">
            InterviewIQ is a smart career platform that helps match your skills and goals with the right job opportunities. Whether you're just starting out or looking for your next move, InterviewIQ connects you to what fits best.
          </p>
          <Link
            to="features"
            smooth={true}
            duration={500}
            offset={-100}
            className="bg-bg-home hover:bg-primary hover:font-bold px-6 py-3 cursor-pointer rounded-full text-lg transition"
          >Know More!
          </Link>
        </div>
      </section>

      <section className="hidden md:block relative md:w-1/4 h-[340px] mt-12 md:mt-0 z-10 w-1/4">
        {/* Desk / Character Image */}
        <img
          src={DeskScene}
          alt="Interview "
          className="w-full h-full object-contain"
        />

        {/* Floating Resume */}
        <motion.img
          src={Resume}
          alt="Floating resume"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-3 left-3 w-20 opacity-80"
        />

        {/* Typing Animation */}
        <motion.div
          className="absolute bottom-6 left-10 w-24"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Lottie animationData={TypingAnimation} loop autoplay />
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;

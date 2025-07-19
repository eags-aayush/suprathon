import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2018_Kerala_floods_rescue_operations.jpg/1920px-2018_Kerala_floods_rescue_operations.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Suprathon
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6">
          Your all in one interview platform.
        </p>
        <p className="text-md md:text-lg mb-8 max-w-2xl mx-auto">
          Suprathon is a smart career platform that helps match your skills and goals with the right job opportunities. Whether you're just starting out or looking for your next move, Suprathon connects you to what fits best.
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
  );
};

export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="text-white py-20 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Start Monitoring Your City Now
        </h2>
        <Link
          to="/dashboard"
          className="inline-block bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

import React from "react";
import { BookCheck, Rocket, Repeat, Blocks, FileText, Brain } from "lucide-react";

const features = [
  {
    title: "AI Analysis",
    icon: <Brain className="w-8 h-8 text-pink-600" />,
    description: "Automatically evaluates interview responses using sentiment analysis, keyword detection, and smart scoring.",
  },
  {
    title: "Test Capability",
    icon: <BookCheck className="w-8 h-8 text-blue-600" />,
    description: "Conduct customizable technical and aptitude tests with automated evaluation and real-time results.",
  },
  {
    title: "Boost Self Esteem",
    icon: <Rocket className="w-8 h-8 text-green-600" />,
    description: "Personalized feedback to help candidates gain confidence and improve with every attempt.",
  },
  {
    title: "Fluent Communication",
    icon: <Repeat className="w-8 h-8 text-yellow-500" />,
    description: "Practice and enhance spoken and written skills through guided mock interviews.",
  },
  {
    title: "Adaptive Learning",
    icon: <Blocks className="w-8 h-8 text-red-600" />,
    description: "Personalized learning paths that adjust based on your performance, strengths, and areas for improvement.",
  },
  {
    title: "PDF Reports",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    description: "Generate detailed, downloadable performance reports for easy sharing and progress tracking.",
  },
];

const FeatureHighlights = () => {
  return (
    <section id="features" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-border shadow-md rounded-2xl p-6 text-left hover:shadow-lg cursor-cell transition backdrop-blur-md bg-white/10 hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;

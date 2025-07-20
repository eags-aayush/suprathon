import React from "react";
import { MousePointerClick, CloudDownload, BrainCog, BarChart } from "lucide-react";

const steps = [
  {
    title: "Select a Option",
    icon: <MousePointerClick className="w-8 h-8 text-blue-600" />,
    description: "User selects what they want: Analyize, Humanize, or the FAQs.",
  },
  {
    title: "Acquire Data",
    icon: <CloudDownload className="w-8 h-8 text-green-600" />,
    description: "User uploads data about the interview.",
  },
  {
    title: "AI Detection",
    icon: <BrainCog className="w-8 h-8 text-purple-600" />,
    description: "AI analyzes the data and provides insights.",
  },
  {
    title: "PDF and Mail Insights",
    icon: <BarChart className="w-8 h-8 text-yellow-600" />,
    description: "User receives a PDF and email with insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 cursor-default">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center px-4 md:w-1/4 hover:scale-105"
            >
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm -">{step.description}</p>

              {/* Line connector */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 right-[-50%] w-[100%] h-1 bg-blue-300 z-[-1]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

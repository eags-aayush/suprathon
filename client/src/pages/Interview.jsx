import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import interviews from './interviews.json'; // your 30-item JSON

const Interview = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-text mt-10 mb-8">
                        🎤 Interview Transcripts
                    </h1>

                    {interviews.map((itv, index) => (
                        <div key={index} className="py-1 overflow-hidden divide-y divide-gray-300">
                            <button
                                onClick={() => toggle(index)}
                                className={`pb-3 w-full flex justify-between items-center text-left cursor-pointer text-text font-medium text-lg focus:outline-none ${activeIndex === index ? 'bg-gray-100' : ''}`}
                            >
                                {itv.title}
                                <ChevronDown
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 ' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ${activeIndex === index ? 'max-h-screen opacity-100 bg-gray-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className=" py-4 space-y-2">
                                    {itv.transcript.map((line, i) => {
                                        const isInterviewer = line.trim().startsWith('Interviewer:');
                                        return (
                                            <p
                                                key={i}
                                                className={`leading-relaxed ${isInterviewer ? 'font-semibold text-text' : 'text-text'
                                                    }`}
                                            >
                                                {line}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Interview;

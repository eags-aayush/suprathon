import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import faqs from './FAQ.json'; // ✅ Update this path if needed

const TheFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Keywords to highlight in both answer and examples
  const keywords = [
  'core concepts',
  'coding problems',
  'mock interviews',
  'HR questions',
  'STAR method',
  'technical interview',
  'behavioral questions',
  'Tell me about yourself',
  'eye contact',
  'confidence',
  'online interviews',
  'resume',
  'company culture',
  'project expectations',
  'notes',
  'challenge',
  'system design',
  'strengths and weaknesses',
  'admit it',
  'communication skills',
  'cultural fit',
  'first impression',
  'problem-solving',
  'team collaboration',
  'follow-up',
  'punctuality',
  'domain-specific topics',
  'body language',
  'feedback',
  'self-awareness',
  'initiative',
  'conflict resolution',
  'job description',
  'background noise',
  'project experience',
  'interview preparation',
  'logical thinking',
  'data structures',
  'real-world environment',
  'career goals'
];


  const highlightKeywords = (text) => {
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return text.split(regex).map((part, i) =>
      keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className="text-accent font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-text mt-10 mb-8">❓ Frequently Asked Questions</h1>

          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />

          <div className="divide-y divide-gray-300">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex justify-between items-center text-left cursor-pointer text-text font-medium text-lg focus:outline-none"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-text leading-relaxed">{highlightKeywords(faq.answer)}</p>

                    {faq.examples && faq.examples.length > 0 && (
                      <div className="mt-2">
                        <ul className="list-disc pl-6 space-y-1 text-text text-sm">
                          {faq.examples.map((example, i) => (
                            <li key={i}>{highlightKeywords(example)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-text text-center py-6">No FAQs found for your search.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TheFAQ;

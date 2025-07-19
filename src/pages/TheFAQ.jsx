import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqs = [
  {
    question: "How should I prepare for a technical interview?",
    answer:
      "Start by reviewing core concepts of your field, practicing coding problems on platforms like LeetCode or HackerRank, and brushing up on system design basics. Mock interviews also help build confidence.",
  },
  {
    question: "What are common HR interview questions?",
    answer:
      "Typical HR questions include: 'Tell me about yourself', 'What are your strengths and weaknesses?', 'Why do you want to join our company?', and 'Where do you see yourself in 5 years?'. Prepare your answers with examples.",
  },
  {
    question: "How can I make a strong first impression?",
    answer:
      "Dress appropriately, be punctual, maintain eye contact, offer a firm handshake (if in person), and speak clearly. Confidence and courtesy go a long way.",
  },
  {
    question: "What if I don’t know the answer to a question?",
    answer:
      "Stay calm. It's okay to admit you don't know — but try to explain how you’d approach solving it. Showing logical thinking is often more valuable than knowing everything.",
  },
  {
    question: "How do I answer 'Tell me about yourself'?",
    answer:
      "Structure it like this: who you are professionally, your key skills or experience, and why you’re interested in this role. Keep it concise and relevant to the job.",
  },
  {
    question: "Should I ask questions at the end of the interview?",
    answer:
      "Yes! Ask thoughtful questions about the team, company culture, or project expectations. It shows genuine interest and preparation.",
  },
  {
    question: "What are some tips for online interviews?",
    answer:
      "Ensure good lighting, dress appropriately, use a quiet background, test your mic/cam beforehand, and keep your resume open for reference. Look into the camera to simulate eye contact.",
  },
  {
    question: "How do I prepare for behavioral questions?",
    answer:
      "Use the STAR method — Situation, Task, Action, Result — to structure your answers. Practice responses to questions like 'Tell me about a time you faced a challenge' or 'How do you handle pressure?'",
  },
  {
    question: "Can I take notes during the interview?",
    answer:
      "Yes, especially in technical or case interviews. Jotting down key points shows attentiveness and helps organize your thoughts before answering.",
  },
];


const TheFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-text mb-6">❓ Frequently Asked Questions</h1>

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
                  className="w-full flex justify-between items-center text-left  cursor-pointer text-text font-medium text-lg focus:outline-none"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-60 mt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-text">{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-text text-center py-6">No FAQs found for your search.</p>
          )}
        </div>
      </div>
    </div>\
    <Footer />
    </>
  );
};

export default TheFAQ;

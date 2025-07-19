import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clipboard, Trash2, Send } from 'lucide-react';

const Humanize = () => {

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <>
      <Navbar />
      <section className="my-20 px-6 flex flex-col items-center gap-10">
        <p className="text-center max-w-3xl text-lg text-gray-700">
          Paste or upload your interview transcript, and our AI will humanize the text—refining tone, clarity, and grammar.
          Instantly get a polished version and receive a detailed edit summary via email.
        </p>

        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
          <div className="w-full md:w-1/2 flex flex-col h-[60vh] ring-1 ring-offset-2 ring-red-500 rounded-lg bg-white shadow-sm">
            <textarea
              className="w-full h-full rounded-t-lg p-4 resize-none focus:outline-none"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste or type your text here..."
            />
            <div className='flex justify-between'>
            <button className="w-1/2 cursor pointer flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-sm font-medium rounded-b-lg hover:bg-gray-300 transition"
              onClick={() => setInputText('')}
            >
              <Send size={18} /> Submit
            </button>
            <button className="w-1/2 cursor pointer flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-sm font-medium rounded-b-lg hover:bg-gray-300 transition"
              onClick={() => {setInputText(''); setOutputText('')}}
            >
              <Trash2 size={18} /> Reset
            </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col h-[60vh] ring-1 ring-offset-2 ring-green-500 rounded-lg bg-white shadow-sm">
            <textarea
              className="w-full h-full rounded-t-lg p-4 resize-none focus:outline-none"
              readOnly
              value={outputText}
              placeholder="Your humanized output will appear here..."
            />
            <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-sm font-medium rounded-b-lg hover:bg-gray-300 transition"
              onClick={() => navigator.clipboard.writeText(outputText)}
            >
              <Clipboard size={18} /> Copy
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Humanize;

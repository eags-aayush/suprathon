import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clipboard, Trash2, Send } from 'lucide-react';

const Humanize = () => {

  const onClickHandler = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/humanize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setOutputText(data.result || 'No response');
    } catch (error) {
      console.error('Submission error:', error);
      setOutputText('Failed to process input.');
    }
  }


  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <>
      <Navbar />
      <section className="my-20 px-6 flex flex-col items-center gap-10">
        <p className="text-center max-w-3xl text-lg text-text">
          Paste or upload your interview transcript, and our AI will humanize the text, refining tone, clarity, and grammar.
          Instantly get a polished version and receive a detailed edit summary via email.
        </p>

        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
          <div className="w-full md:w-1/2 flex flex-col h-[60vh] ring-1 ring-offset-2 ring-red-500 rounded-lg bg-background shadow-sm">
            <textarea
              className="w-full h-full rounded-t-lg p-4 resize-none focus:outline-none"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste or type your text here..."
            />
            <div className='flex justify-between'>
              <button className="w-1/2 cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-background text-sm font-medium rounded-b-lg hover:bg-primary transition"
                onClick={() => { onClickHandler() }}
              >
                <Send size={18} /> Submit
              </button>
              <button className="w-1/2 cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-background text-sm font-medium rounded-b-lg hover:bg-primary transition"
                onClick={() => { setInputText(''); setOutputText('') }}
              >
                <Trash2 size={18} /> Reset
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col h-[60vh] ring-1 ring-offset-2 ring-green-500 rounded-lg bg-background shadow-sm">
            <textarea
              className="w-full h-full rounded-t-lg p-4 resize-none focus:outline-none"
              readOnly
              value={outputText}
              placeholder="Your humanized output will appear here..."
            />
            <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-background text-sm font-medium rounded-b-lg hover:bg-primary transition"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(outputText);
                  alert(`"${outputText}" copied to clipboard!`);
                } catch (err) {
                  alert("Failed to copy text.");
                  console.error("Clipboard error:", err);
                }
              }}
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

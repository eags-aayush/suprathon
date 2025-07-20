import { useState } from 'react';
import { UploadCloud, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Analyze = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
  });

  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !files.length ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.role.trim() ||
      !form.company.trim()
    ) {
      return alert('Please fill out all fields and upload at least one voice recording.');
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResult({
        score: 91,
        remarks: 'Strong delivery and confident tone. Good pace and articulation.',
      });
    }, 2000);
  };

  return (
    <>
    <Navbar />
    <div className="my-20 flex items-center justify-center bg-background px-4">
      <div className="w-full px-8">
        <p className="text-text text-lg mb-6">
          Upload your interview audio recordings and fill in the details. Our AI evaluates your performance and emails you a detailed report.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-xl border placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-xl border NavLink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="role"
            placeholder="Role you're applying for"
            value={form.role}
            onChange={handleChange}
            className="p-3 rounded-xl border NavLink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="p-3 rounded-xl border NavLink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="sm:col-span-2 w-full flex items-center gap-3 px-4 py-3 border border-dashed rounded-xl cursor-pointer border-accent transition shadow-sm">
            <UploadCloud className="w-5 h-5 text-text" />
            <span className="text-text truncate">
              {files.length > 0
                ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
                : 'Upload voice recordings'}
            </span>
            <input
              type="file"
              accept="audio/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {files.length > 0 && (
            <div className="sm:col-span-2 flex flex-col gap-2 mt-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center NavLink border rounded-lg px-4 py-2 text-sm text-gray-800 shadow-sm"
                >
                  <span className="truncate max-w-[80%]">{file.name}</span>
                  <span className="text-gray-500 text-xs">{(file.size / 1024).toFixed(1)} KB</span>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 mt-4 bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit & Analyze'}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-6 rounded-xl bg-white/60 shadow-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">📊 AI Evaluation Result</h2>
            <p className="text-gray-700"><strong>Score:</strong> {result.score}/100</p>
            <p className="text-gray-700 mt-1"><strong>Remarks:</strong> {result.remarks}</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Analyze;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/humanize', async (req, res) => {
  const { text } = req.body;
  const prompt = `
Rewrite the following paragraph in a more natural, human-sounding way. 
Keep the tone **formal and professional**, and return the text, with no extra explanation, options, or formatting:
"${text.trim()}"
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    res.json({ result });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

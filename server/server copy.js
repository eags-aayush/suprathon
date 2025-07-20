import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const textToHumanize = `
The implementation of artificial intelligence technologies is increasing rapidly across various sectors. These systems are capable of processing large volumes of data and making decisions with minimal human intervention. As a result, organizations are achieving operational efficiencies and improved decision-making capabilities.
`;

const prompt = `
Rewrite the following paragraph in a more natural, human-sounding way. 
Keep the tone formal and professional, and return the text, with no extra explanation, options, or formatting:
"${textToHumanize.trim()}"
`;

(async () => {
  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_API_KEY,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
  const humanizedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

  console.log('\n✅ Humanized Output:\n');
  console.log(humanizedText);
})();

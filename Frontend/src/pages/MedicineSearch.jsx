import React, { useState } from "react";
import axios from "axios";

const MedicineSearch = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("hi"); // Default: Hindi
  const [translatedResult, setTranslatedResult] = useState(null);
  const [translating, setTranslating] = useState(false);

  // Fetch Medicine Details using OpenAI API
  const fetchMedicineDetails = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are a medical assistant providing detailed, structured, and easy-to-read medicine information.",
            },
            {
              role: "user",
              content: `Provide an **organized, detailed, and readable** summary of the medicine **${query}**.  
              Format it with sections:
              - **🩺 Medical Uses**  
              - **⚠️ Precautions & Side Effects**  
              - **💊 Dosage & Administration**  
              - **🔗 Drug Interactions & Warnings**  
              - **📌 Additional Insights & Guidelines**  
              Make the response structured and easy to read. Use bullet points where necessary.`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResult(response.data.choices[0].message.content);
      setTranslatedResult(null); // Reset translation when new search is done
    } catch (err) {
      setError("Failed to fetch medicine details. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Translate the result using OpenAI API
  const translateResult = async () => {
    if (!result) return;
    setTranslating(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are a translation assistant providing accurate translations.",
            },
            {
              role: "user",
              content: `Translate the following text to ${language} while keeping its **formatting and readability intact**:\n\n${result}`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTranslatedResult(response.data.choices[0].message.content);
    } catch (err) {
      setError("Failed to translate text. Try again later.");
    } finally {
      setTranslating(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">
        🔍 Medicine Search
      </h1>
      <div className="flex justify-center gap-4">
        <input
          type="text"
          className="p-2 border rounded-md w-80"
          placeholder="Enter medicine name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={fetchMedicineDetails}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {result && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg relative">
          {/* Translate Controls - Top Right */}
          <div className="absolute right-4 top-4 flex gap-2">
            <select
              className="p-2 border rounded-md"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="hi">🇮🇳 Hindi</option>
              <option value="bn">🇮🇳 Bengali</option>
              <option value="ta">🇮🇳 Tamil</option>
              <option value="te">🇮🇳 Telugu</option>
              <option value="mr">🇮🇳 Marathi</option>
              <option value="ml">🇮🇳 Malayalam</option>
              <option value="kn">🇮🇳 Kannada</option>
              <option value="pa">🇮🇳 Punjabi</option>
              <option value="gu">🇮🇳 Gujarati</option>
            </select>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={translateResult}
              disabled={translating}
            >
              {translating ? "Translating..." : "Translate"}
            </button>
          </div>

          {/* Medicine Info */}
          <h2 className="text-xl font-semibold mb-2">📄 Medicine Details</h2>
          <div className="space-y-4 mt-6">
            {(translatedResult || result).split("\n").map((line, index) => {
              if (
                line.startsWith("🩺") ||
                line.startsWith("⚠️") ||
                line.startsWith("💊") ||
                line.startsWith("🔗") ||
                line.startsWith("📌")
              ) {
                return (
                  <h3
                    key={index}
                    className="text-lg font-semibold mt-3 text-blue-600"
                  >
                    {line}
                  </h3>
                );
              } else if (line.startsWith("-")) {
                return (
                  <li key={index} className="ml-6 list-disc text-gray-700">
                    {line.slice(1)}
                  </li>
                );
              } else {
                return (
                  <p key={index} className="text-gray-700">
                    {line}
                  </p>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineSearch;

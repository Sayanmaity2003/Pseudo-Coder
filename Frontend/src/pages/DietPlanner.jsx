import React, { useState } from "react";
import axios from "axios";

const DietPlanner = () => {
    const [formData, setFormData] = useState({
        age: "",
        height: "",
        weight: "",
        dailyActivity: "Sedentary",
        medicalHistory: "",
        allergicFoods: "",
        dietBudget: "Cheap & Affordable",
        healthGoal: "Lose Weight"
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        const { age, height, weight, dailyActivity, medicalHistory, allergicFoods, dietBudget, healthGoal } = formData;
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        
        let bmiCategory = "";
        if (bmi < 18.5) bmiCategory = "Underweight";
        else if (bmi < 24.9) bmiCategory = "Normal weight";
        else if (bmi < 29.9) bmiCategory = "Overweight";
        else bmiCategory = "Obese";

        const prompt = `
User Details:
- Age: ${age}
- BMI: ${bmi} (${bmiCategory})
- Daily Activity: ${dailyActivity}
- Medical History: ${medicalHistory}
- Allergic Foods: ${allergicFoods || "None"}
- Budget for Diet: ${dietBudget}
- Health Goal: ${healthGoal}

Provide a structured response with:
1. **Health Analysis** with bullet points for ✅ What to Do / ❌ What Not to Do.
2. **Diet Plan**: 🍽️ What to eat (include calories) & 🚫 What not to eat (with reasons).
Ensure that each point is on a new line, and use bullet points.
`;

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-4",
                    messages: [{ role: "system", content: "You are a health advisor." }, { role: "user", content: prompt }]
                },
                {
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            setResult({
                bmi,
                bmiCategory,
                advice: response.data.choices[0].message.content
            });
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            setResult({ bmi, bmiCategory, advice: "Error fetching health advice. Try again!" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Health Monitoring App</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label className="block font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
                        {key === "dailyActivity" || key === "dietBudget" || key === "healthGoal" ? (
                            <select name={key} value={formData[key]} onChange={handleChange} className="w-full p-2 border rounded-lg">
                                {key === "dailyActivity" && ["Sedentary", "Light Activity", "Moderate Activity", "Active", "Highly Active"].map(option => <option key={option} value={option}>{option}</option>)}
                                {key === "dietBudget" && ["Cheap & Affordable", "Affordable", "Good Quality", "Best Quality"].map(option => <option key={option} value={option}>{option}</option>)}
                                {key === "healthGoal" && ["Lose Weight", "Maintain Fitness", "Gain Weight"].map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                        ) : (
                            <input
                                type={key === "age" || key === "height" || key === "weight" ? "number" : "text"}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Get Health Advice</button>
            </form>
            {loading && <p className="text-center text-blue-500 mt-4">Fetching your health advice...</p>}
            {result && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700">Your Health Analysis</h3>
                    <p><strong>BMI:</strong> {result.bmi} ({result.bmiCategory})</p>
                    <h4 className="font-medium mt-2">Health Advice:</h4>
                    <ul className="list-disc pl-5 text-gray-600 mt-1">
                        {result.advice.split("\n").map((line, index) => (
                            line.trim() ? <li key={index}>{line}</li> : null
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DietPlanner;

import React, { useState } from 'react';
import { getTripPlan } from './services/geminiService';

function App() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const plan = await getTripPlan(destination, budget, interests.split(","));
    setResult(plan);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">🌍 AI Trip Planner</h1>
      <input placeholder="Destination" className="p-2 mb-2 border w-full" onChange={e => setDestination(e.target.value)} />
      <input placeholder="Budget" className="p-2 mb-2 border w-full" onChange={e => setBudget(e.target.value)} />
      <input placeholder="Interests (comma-separated)" className="p-2 mb-2 border w-full" onChange={e => setInterests(e.target.value)} />
      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded w-full">Generate Plan</button>
      <div className="mt-4 whitespace-pre-wrap bg-white p-4 rounded shadow">
        {result}
      </div>
    </div>
  );
}

export default App;

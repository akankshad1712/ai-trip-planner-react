import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const getTripPlan = async (destination, budget, interests) => {
  const prompt = `Plan a 5-day trip to ${destination} for a budget of ${budget} INR focusing on ${interests.join(", ")}. Include places, food, and timings.`;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};

import { type DrugAnalysis, type ChatMessage } from "../types";

const API_BASE_URL = import.meta.env.VITE_HUGFACE;
const MAX_HISTORY_MESSAGES = 20;

export const getChatResponse = async (
  prompt: string,
  history: ChatMessage[],
  drugData: DrugAnalysis
): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        drug_name: drugData.drug_name,
        message: prompt,
        history: history.slice(-MAX_HISTORY_MESSAGES),
      }),
    });

    if (!response.ok) {
      throw new Error(`Chat request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.response || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Chat API Error:", error);
    return "Connection error. Please try again later.";
  }
};

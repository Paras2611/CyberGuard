import { GoogleGenAI, Chat, GenerateContentResponse, Type } from "@google/genai";
import { FULL_PDF_CONTEXT } from '../constants';
import { RiskPrediction } from '../types';

const getClient = (): GoogleGenAI => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API Key is missing. Please set the API_KEY environment variable.");
    }
    return new GoogleGenAI({ apiKey });
};

// --- Chat Assistant for Guidelines ---

let chatSession: Chat | null = null;

export const initializeChat = async () => {
    try {
        const ai = getClient();
        chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are an expert consultant for the Smart India Hackathon (SIH) 2025. 
                Your knowledge is strictly based on the provided document text. 
                
                Document Context:
                ${FULL_PDF_CONTEXT}
                
                Role:
                - Answer questions about the implementation guidelines, stipend, mentorship, and the specific Problem Statement regarding Cybercrime Predictive Analytics.
                - Be professional, concise, and helpful.
                - If the answer is not in the context, state that it is not covered in the provided guidelines.
                `,
            },
        });
        return true;
    } catch (error) {
        console.error("Failed to initialize chat:", error);
        return false;
    }
};

export const sendMessageToAssistant = async (message: string): Promise<string> => {
    if (!chatSession) {
        await initializeChat();
    }
    if (!chatSession) throw new Error("Chat session could not be initialized.");

    try {
        const response: GenerateContentResponse = await chatSession.sendMessage({ message });
        return response.text || "I couldn't generate a response. Please try again.";
    } catch (error) {
        console.error("Error sending message:", error);
        return "Sorry, I encountered an error connecting to the SIH Assistant.";
    }
};

// --- Predictive Engine Simulator ---

export const generateRiskPrediction = async (location: string, time: string, density: string): Promise<RiskPrediction> => {
    const ai = getClient();
    
    const prompt = `
    Act as the "Predictive Analytics Engine" described in the SIH Problem Statement.
    Analyze the risk of cash withdrawal fraud for the following parameters:
    - Location: ${location}
    - Time of Day: ${time}
    - ATM/Bank Density: ${density}

    Based on patterns typical of cybercrime (e.g., late night withdrawals in high-density anonymous areas), generate a JSON risk assessment.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        location: { type: Type.STRING },
                        riskLevel: { type: Type.STRING, enum: ['Low', 'Medium', 'High', 'Critical'] },
                        probability: { type: Type.NUMBER, description: "Percentage probability 0-100" },
                        factors: { type: Type.ARRAY, items: { type: Type.STRING } },
                        recommendedAction: { type: Type.STRING }
                    },
                    required: ['location', 'riskLevel', 'probability', 'factors', 'recommendedAction']
                }
            }
        });

        if (response.text) {
            return JSON.parse(response.text) as RiskPrediction;
        }
        throw new Error("Empty response from model");
    } catch (error) {
        console.error("Prediction Engine Error:", error);
        // Fallback mock data if API fails
        return {
            location: location,
            riskLevel: 'Medium',
            probability: 50,
            factors: ["Data unavailable", "Using heuristic fallback"],
            recommendedAction: "Monitor manually"
        };
    }
};

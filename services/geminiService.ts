
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the JG AI Consultant for JG Developer - European Union Operations.
You represent JG Developer and their EU regional partner, IA7 Global (headquartered in Germany).
Your goal is to answer questions about JG Developer's services in the EU, including Software Engineering, AI, Cloud, Cybersecurity, and Digital Transformation.
The EU operations cover all 27 member states.
Key points:
- Authorized Regional Partner: IA7 Global (Germany).
- Governance: Global technology and security standards are centrally governed by JG AI.
- Compliance: All systems are designed for GDPR alignment.
- Services: Software, AI, Cloud, DevOps, Cyber, Transformation.
Be professional, concise, and helpful. If asked about contact, mention the contact form in the EU Operations section.
`;

export class AIConsultant {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    if (!apiKey) {
      console.error('VITE_GEMINI_API_KEY is not set in environment variables');
    }
    this.ai = new GoogleGenAI({ apiKey });
  }

  async chat(message: string, history: { role: 'user' | 'model', text: string }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-lite',
        contents: [
          ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });
      return response.text || "I'm sorry, I couldn't process that request right now.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        return "Configuration error: API key not found. Please ensure VITE_GEMINI_API_KEY is set in your .env.local file.";
      }
      return "An error occurred while connecting to the EU operations intelligence node. Please try again later.";
    }
  }
}

export const aiConsultant = new AIConsultant();

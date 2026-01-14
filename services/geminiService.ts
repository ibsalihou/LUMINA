
import { GoogleGenAI, Type } from "@google/genai";
import { BrandSuggestion } from "../types";

export const generateBrandDirection = async (businessDescription: string): Promise<BrandSuggestion[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `En tant qu'expert en stratégie de marque senior, propose 2 directions visuelles distinctes pour une entreprise décrite comme suit : "${businessDescription}". 
    Réponds EXCLUSIVEMENT en français. Concentre-toi sur l'ambiance, la palette de couleurs et le style typographique.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            mood: { type: Type.STRING, description: "L'ambiance générale (ex: Minimaliste, Énergique, Luxe)" },
            colorPalette: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING }, 
              description: "Liste de 3-4 codes hexadécimaux ou noms de couleurs" 
            },
            typographyStyle: { type: Type.STRING, description: "Styles de police suggérés (ex: Sans-serif audacieux, Serif élégant)" },
            rationale: { type: Type.STRING, description: "Brève explication de la pertinence de ce choix" }
          },
          required: ["mood", "colorPalette", "typographyStyle", "rationale"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Erreur de parsing Gemini", error);
    return [];
  }
};

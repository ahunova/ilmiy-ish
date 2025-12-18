
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getResearchAdvice = async (prompt: string, context?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: `Siz pedagogika sohasidagi ilmiy rahbar va professorsiz. 
        Sizning vazifangiz talabalarga "Elektron axborot ta'lim muhitida ilmiy tadqiqot" olib borishda yordam berish. 
        Javoblaringiz ilmiy, metodologik jihatdan to'g'ri va motivatsion bo'lishi kerak. 
        O'zbek tilida javob bering. ${context ? `Hozirgi mavzu: ${context}` : ''}`,
      },
    });
    return response.text || "Kechirasiz, ma'lumot olishda xatolik yuz berdi.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Tizimda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.";
  }
};

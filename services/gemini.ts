import { GoogleGenAI, Type } from "@google/genai";
import { PoemResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSeussPoem = async (topic: string): Promise<PoemResponse> => {
  const modelId = "gemini-2.5-flash"; // Using Flash for speed and creativity

  const systemInstruction = `
    You are the spirit of Dr. Seuss. 
    Your task is to take any input topic, story, or description and transform it into a whimsical, rhyming poem.
    
    Rules for your writing:
    1. Use Anapestic Tetrameter (da-da-DUM, da-da-DUM) where possible, or a bouncy, rhythmic meter typical of Seuss.
    2. Invent silly, nonsensical words (like "wocket", "grinch", "thneed") to make rhymes work.
    3. Keep the tone lighthearted, fun, and slightly absurd.
    4. Capitalize words for emphasis occasionally.
    5. Ensure the poem tells the story provided in the prompt, but in a Seussian way.
    6. Provide a catchy, Seuss-like title for the poem.
  `;

  const prompt = `Please write a Dr. Seuss style poem about the following topic: "${topic}"`;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "A creative, Seuss-style title for the poem",
            },
            content: {
              type: Type.STRING,
              description: "The full text of the rhyming poem, with line breaks",
            },
          },
          required: ["title", "content"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as PoemResponse;
    } else {
      throw new Error("No content generated");
    }
  } catch (error) {
    console.error("Error generating poem:", error);
    throw error;
  }
};

export const generateSeussIllustration = async (topic: string): Promise<string | null> => {
  const modelId = "gemini-2.5-flash-image";
  const prompt = `A whimsical, hand-drawn style illustration of "${topic}" in the style of Dr. Seuss. Use bold lines, curved architecture, truffula trees, and strange furry creatures. Colorful but with a vintage storybook feel.`;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [{ text: prompt }]
      },
      // Note: responseMimeType and responseSchema are not supported for gemini-2.5-flash-image
    });

    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
           return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating illustration:", error);
    // Return null so the app can continue showing just the poem if image fails
    return null;
  }
};
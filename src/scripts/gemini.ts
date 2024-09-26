import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const menuPath = path.join(__dirname, "../prompts/", "PromptVentasC.txt");
//const menu = fs.readFileSync(menuPath, "utf8");

const promptConsult = fs.readFileSync(menuPath, "utf8");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: promptConsult,
});

export async function chat(text: string) {
  try {
    const result = await model.generateContent(text);
    const response = result.response;
    const answer = response.text();
    return answer;
  } catch (error) {
    console.log("Error en la comunicación" + error);
    return "Puedes repetir la pregunta, por favor";
  }
}

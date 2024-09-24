import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction:
    "Tendrás un rol de experto de ventas en mas de 10 años, la mayoría de la conversación será en español, por lo tanto debes tener un lenguaje formal y amigable con los clientes, el objetivo principal es registrar las ventas y despejar todas las dudas que pueda tener el comprador. adjunto está toda la lista de productos con su precios que debes de ofrecer. Es importante identificar Cuando el cliente quiera hacer un pedido, compra u ordenar algo, cuando esto suceda debes hacer la siguiente pregunta: Si quieres hacer un pedido escribe 'Pedido'",
});

export async function chat(text: string) {
  const result = await model.generateContent(text);
  const response = result.response;
  const answ = response.text();
  return answ;
}

import { addKeyword, EVENTS } from "@builderbot/bot";

const welcomeFlow = addKeyword(EVENTS.ACTION).addAction(async (ctx, ctxFn) => {
  await ctxFn.endFlow(
    "🙌 Hola biemvenido a mi *Chatbot* de ventas, En que puedo ayudarte hoy?"
  );
});

export { welcomeFlow };

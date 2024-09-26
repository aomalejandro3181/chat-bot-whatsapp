import { EVENTS, addKeyword } from "@builderbot/bot";
// import moment from "moment";
import { welcomeFlow } from "./Welcome";

// const today = moment();

const registerFlow = addKeyword("Pedido").addAnswer(
  ["Si quieres hacer un pedido escribe ", " Si o No"],
  { capture: true },
  async (ctx, { gotoFlow }) => {
    const response = ctx.body;

    if (!["Si"].includes(response)) {
      return gotoFlow(welcomeFlow);
    } else {
      return gotoFlow(createOrderFlow);
    }
  }
);

const createOrderFlow = addKeyword(EVENTS.ACTION).addAnswer(
  "Escriba el detalle de su pedido",
  { capture: true },
  async (ctx, { flowDynamic }) => {
    /*
    TODO: Usar esta variable para guardar en la hoja de google sheet

    const order = {
      Nombre: ctx.name,
      Telefono: ctx.from,
      Fecha: today.format("L"),
      Pedido: ctx.body,
    };
    */
    await flowDynamic(`El siguiente pedido fue registrado: \n  ${ctx.body}`);
    return await flowDynamic("Gracias por tu pedido!");
  }
);

export { registerFlow, createOrderFlow };

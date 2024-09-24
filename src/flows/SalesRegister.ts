import { EVENTS, addKeyword } from "@builderbot/bot";
import moment from "moment";
import { welcomeFlow } from "~/app";

const today = moment();

const registerFlow = addKeyword("Pedido").addAnswer(
  ["Si quieres hacer un pedido escribe ", " Si o No"],
  { capture: true },
  async (ctx, ctxFn) => {
    const response = ctx.body;

    if (!["Si"].includes(response)) {
      return ctxFn.gotoFlow(welcomeFlow);
    } else {
      // await ctxFn.flowDynamic(`Este fue tu pedido:  ${response}`);
      return ctxFn.gotoFlow(createOrderFlow);
    }
  }
);

const createOrderFlow = addKeyword(EVENTS.ACTION).addAnswer(
  "Escribe el detalle de tu pedido",
  { capture: true },
  async (ctx, { flowDynamic }) => {
    const order = {
      Nombre: ctx.name,
      Telefono: ctx.from,
      Fecha: today.format("L"),
      Pedido: ctx.body,
    };
    flowDynamic([`El siguiente pedido fue registrado ${ctx.name}:  ${order}`]);
    return;
  }
);

export { registerFlow };

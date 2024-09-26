
# Chatbot de Ventas para WhatsApp

Este proyecto implementa un chatbot de ventas para WhatsApp utilizando Builderbot, Baileys y Google Gemini.




## Funcionalidades

* Saluda a los usuarios y ofrece ayuda.
* Guía a los usuarios a través del proceso de registro de un pedido.
* Registra los detalles del pedido.
* Integración con Google Gemini para respuestas más naturales y conversacionales.


## Run Locally

Clone the project

```bash
  git clone https://github.com/tu-usuario/chat-bot-whatsapp.git
```

Go to the project directory

```bash
  cd chat-bot-whatsapp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Variables de entorno

To run this project, you will need to add the following environment variables to your .env file

`PORT=3008`
`GEMINI_API_KEY=tu_clave_api_de_gemini`


## Estructura del Proyecto

* **src/app.ts**: Archivo principal del bot, define los flujos de conversación.
* **src/flows**: Contiene los flujos de conversación individuales (por ejemplo, Welcome.ts, SalesRegister.ts).
* **src/scripts/gemini.ts**: Maneja la integración con Google Gemini.
* **src/prompts/PromptVentasC.** txt: Contiene el prompt inicial para Google Gemini.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus cambios.

Please adhere to this project's `code of conduct`.

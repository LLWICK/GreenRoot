// server/utils/openai.js
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // Assumes .env is set up
});

const generateChatResponse = async (message) => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an agriculture expert. Help users identify pesticide-related crop damage.",
      },
      { role: "user", content: message },
    ],
  });

  return chatCompletion.choices[0].message.content;
};

module.exports = generateChatResponse;

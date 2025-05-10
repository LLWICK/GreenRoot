const generateChatResponse = require("../utills/openai");

const chatPost = async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await generateChatResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
};

module.exports = { chatPost };

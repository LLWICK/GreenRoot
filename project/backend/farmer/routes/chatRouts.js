const express = require("express");
const Route = express.Router();

const { chatPost } = require("../controller/chatController");

Route.post("/", chatPost);

module.exports = Route;

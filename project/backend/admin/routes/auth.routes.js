const express = require('express');
const { register } = require('../controller/auth.controller.js');
const { validateUser } = require('../middleware/auth.middleware.js');
const router = express.Router();

// Registration route
router.post("/register", validateUser, register);

module.exports = router;

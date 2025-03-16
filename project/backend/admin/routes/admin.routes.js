const express = require("express");
const { authenticateUser, authorizePermissions } = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/dashboard", authenticateUser, authorizePermissions("admin"));

module.exports = router;
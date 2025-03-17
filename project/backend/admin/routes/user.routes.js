const express = require("express");
const { getUsersByRole } = require("../controller/user.controller");
const router = express.Router();


// get all farmers
router.get("/farmers", (req, res) => getUsersByRole(req, res, "farmer"));


module.exports = router;
const express = require("express");
const { getUsersByRole, createUser, updateUser } = require("../controller/user.controller");
const router = express.Router();


// get all admins
router.get("/admins", (req, res) => getUsersByRole(req, res, "admin"));
// get all farmers
router.get("/farmers", (req, res) => getUsersByRole(req, res, "farmer"));
// create a user
router.post("/create", createUser);
// update user
router.put("/update/:id", updateUser);

module.exports = router;
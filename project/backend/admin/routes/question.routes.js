const express = require('express');
// const { authenticateUser, authorizePermissions } = require('../middleware/auth.middleware');
const { createQuestion, getUserQuestions, updateQuestion, getQuestionByTitle } = require('../controller/question.controller');
const router = express.Router();


// create a question
router.post("/create", createQuestion);

// get user's questions
router.get('/questions/:userId', getUserQuestions);

// update question
router.put("/update/:questionId", updateQuestion);

// get question by title
router.get("/title1", (req, res) => getQuestionByTitle(req, res, "Working Issue"));
router.get("/title2", (req, res) => getQuestionByTitle(req, res, "General Inquiry"));
router.get("/title3", (req, res) => getQuestionByTitle(req, res, "Account Issue"));
router.get("/title4", (req, res) => getQuestionByTitle(req, res, "Technical Support"));

module.exports = router;
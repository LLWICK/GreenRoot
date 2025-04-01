const express = require('express');
// const { authenticateUser, authorizePermissions } = require('../middleware/auth.middleware');
const { createQuestion, getUserQuestions, updateQuestion } = require('../controller/question.controller');
const router = express.Router();


// create a question
router.post("/create", createQuestion);

// get user's questions
router.get('/questions/:userId', getUserQuestions);

// update question
router.put("/update/:questionId", updateQuestion);

module.exports = router;
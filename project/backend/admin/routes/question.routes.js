const express = require('express');
const { authenticateUser, authorizePermissions } = require('../middleware/auth.middleware');
const { createQuestion, getAllQuestions, getUserQuestions, getQuestionById, editQuestion, deleteQuestion, replyToQuestion, adminDeleteQuestion } = require('../controller/question.controller');
const router = express.Router();


// create a question
router.post("/create", authenticateUser, createQuestion);

// get all questions
router.get("/questions", authenticateUser, authorizePermissions("admin"), getAllQuestions);

// get user question
router.get("/my-questions", authenticateUser, getUserQuestions);

// get a specific question 
router.get("/question/:id", authenticateUser, getQuestionById);

// edit/update question
router.put("/update/:id", authenticateUser, editQuestion);

// close a question
router.put("/close/:id", authenticateUser, deleteQuestion);

// admin reply to a question
router.post("/reply/:id", authenticateUser, authorizePermissions("admin"), replyToQuestion);

// admin delete question
router.delete("/delete/:id", authenticateUser, authorizePermissions("admin"), adminDeleteQuestion);


module.exports = router;
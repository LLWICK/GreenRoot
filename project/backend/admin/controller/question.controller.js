const Question = require('../model/QuestionModel')

// create a question
const createQuestion = async (req, res) => {
    try {
        const { title, customTitle, message, userId } = req.body;

        if (!title || !message || !userId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const question = new Question({ title, customTitle, message, createdBy: userId });
        await question.save();

        res.status(201).json({ message: "Question created successfully", data: question });
    } catch (err) {
        // console.log(err.message);

        res.status(500).json({ msg: err.message });

    }
}

// Get all questions for a specific user
const getUserQuestions = async (req, res) => {
    try {
        const userId = req.params.userId;
        const questions = await Question.find({ createdBy: userId }).populate("replies.adminId", "name");

        res.status(200).json(questions);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// update question within 1 hour
const updateQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { title, message } = req.body;

        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: "Question not found!" });
        }

        // Check if the question is older than 1 hour
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        if (question.createdAt < oneHourAgo) {
            return res.status(403).json({ message: "Editing time expired!" });
        }

        // Update question
        question.title = title;
        question.message = message;
        question.editedAt = new Date();
        await question.save();

        res.status(200).json({ message: "Question updated successfully", data: question });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// get questions by title
const getQuestionByTitle = async (req, res, title) => {
    try {
        // const { title } = req.params;
        const question = await Question.find({ title });
        // res.status(200).json({ data: question.replies });
        res.status(200).json({ data: question });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// reply to a question
const replyToQuestion = async (req, res) => {
    try {
        const { adminId, message } = req.body;
        const { questionId } = req.params;

        // find the question
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ error: `Question not found...` });
        }

        // Add reply
        question.replies.push({ adminId, message, createdAt: Date.now() });
        await question.save();

        res.status(200).json({ msg: `Reply added successfully...` });

    } catch (error) {
        console.error("Error replying to question:", error);
        res.status(500).json({ msg: error.message });
    }
};

/*
// get all questions
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('createdBy', 'email');
        res.status(200).json({ data: questions });

    } catch (err) {
        console.error("Error in createQuestion:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// get user's questions
const getUserQuestions = async (req, res) => {
    try {
        const userId = req.user.id;
        const questions = await Question.find({ createdBy: userId });
        res.status(200).json(questions);

    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// Get a specific question by ID (New function)
const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id).populate("createdBy", "email");

        if (!question) return res.status(404).json({ message: "Question not found" });

        res.status(200).json({ data: question });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// edit question within 20 minutes
const editQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const question = await Question.findById(id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        if (question.createdBy.toString() !== req.user.id) {
            return res.status(404).json({ message: 'unauthorized' });
        }

        const timeDiff = (new Date() - new Date(question.createdAt)) / 60000;
        if (timeDiff > 20) {
            return res.status(400).json({ message: 'Edit time expried' });
        }

        question.message = message;
        question.editedAt = new Date();
        await question.save();

        res.status(200).json({ message: 'Question updated', question });

    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// close a question
const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        if (question.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        await question.deleteOne();
        res.status(200).json({ message: 'Question closed' });

    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// admin reply
const replyToQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { message } = req.body;

        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        question.replies.push({ adminId: req.user.id, message });
        await question.save();

        res.status(200).json({ message: 'Reply added', question });

    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// admin delete question
const adminDeleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        await Question.findByIdAndDelete(id);

        res.status(200).json({ message: 'Question deleted by admin' });

    } catch (err) {
        res.status(500).json({ message: err });
    }
} */

module.exports = {
    createQuestion,
    getUserQuestions,
    updateQuestion,
    getQuestionByTitle,
    replyToQuestion
}
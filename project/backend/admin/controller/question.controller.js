const Question = require('../model/QuestionModel')

// create a question
const createQuestion = async (req, res) => {
    try {
        const { title, message, userId } = req.body;

        if (!title || !message || !userId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const question = new Question({ title, message, createdBy: userId });
        await question.save();

        res.status(201).json({ message: "Question created successfully", data: question });
    } catch (err) {
        // console.log(err.message);

        res.status(500).json({ msg: err.message });

    }
}

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
    createQuestion
    /*
    getAllQuestions,
    getUserQuestions,
    editQuestion,
    deleteQuestion,
    replyToQuestion,
    adminDeleteQuestion,
    getQuestionById */
}
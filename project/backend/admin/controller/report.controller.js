const Question = require('../model/QuestionModel');
const XLSX = require('xlsx');

const getAllQuestionsForExcel = async (req, res) => {
    try {
        const questions = await Question.find()
            .populate('createdBy', 'firstName lastName email')
            .populate('replies.adminId', 'email') // Populate admin emails
            .lean();

        const formatted = [];

        questions.forEach(q => {
            if (q.replies.length === 0) {
                formatted.push({
                    Title: q.title,
                    Custom_Title: q.customTitle || '',
                    Message: q.message,
                    Created_By: `${q.createdBy?.firstName || ''} ${q.createdBy?.lastName || ''}`,
                    Email: q.createdBy?.email || '',
                    Created_At: new Date(q.createdAt).toLocaleString(),
                    Is_Closed: q.isClosed ? 'Yes' : 'No',
                    Admin_Reply: 'No replies',
                    Admin_Email: ''
                });
            } else {
                q.replies.forEach(reply => {
                    formatted.push({
                        Title: q.title,
                        Custom_Title: q.customTitle || '',
                        Message: q.message,
                        Created_By: `${q.createdBy?.firstName || ''} ${q.createdBy?.lastName || ''}`,
                        Email: q.createdBy?.email || '',
                        Created_At: new Date(q.createdAt).toLocaleString(),
                        Is_Closed: q.isClosed ? 'Yes' : 'No',
                        Admin_Reply: reply.message,
                        Admin_Email: reply.adminId?.email || ''
                    });
                });
            }
        });

        const worksheet = XLSX.utils.json_to_sheet(formatted);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'QuestionsWithReplies');

        const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        res.setHeader('Content-Disposition', 'attachment; filename="questions_with_replies.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed' });
    }
};


module.exports = {
    getAllQuestionsForExcel,
}
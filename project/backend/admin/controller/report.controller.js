const Question = require('../model/QuestionModel');
const XLSX = require('xlsx');

const getAllQuestionsForExcel = async (req, res) => {
    try {
        const questions = await Question.find();

        const formatted = getAllQuestionsForExcel.map(q => ({
            Title: q.title,
            Custom_Title: q.customTitle || '',
            Message: q.message,
            Created_By: q.createdBy,
            Email: q.createdBy?.email || '',
            Created_At: new Date(q.createdAt).toLocaleString(),
            Is_Closed: q.isClosed ? 'Yes' : 'No',
            Total_Replies: q.replies.length
        }));

        const worksheet = XLSX.utils.json_to_sheet(formatted);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Questions')

        const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
        res.setHeader('Content-Disposition', 'attachement; filename="questions.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Failed` })
    }
}
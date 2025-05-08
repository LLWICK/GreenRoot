const express = require('express');
const router = express.Router();
const {
    getAllQuestionsForExcel,

} = require('../controller/report.controller');

router.get('/questions/excel', getAllQuestionsForExcel);

module.exports = router;
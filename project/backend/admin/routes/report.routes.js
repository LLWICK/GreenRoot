const express = require('express');
const router = express.Router();
const {
    getAllQuestionsForExcel,
    getUserForExcel,

} = require('../controller/report.controller');

router.get('/questions/excel', getAllQuestionsForExcel);

// user info excel
router.get('/user-data/excel', getUserForExcel);

module.exports = router;
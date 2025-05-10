const express = require('express');
const router = express.Router();
const {
    getAllQuestionsForExcel,
    getUserForExcel,
    getSalse,

} = require('../controller/report.controller');

router.get('/questions/excel', getAllQuestionsForExcel);

// user info excel
router.get('/user-data/excel', getUserForExcel);
// get sales
router.get('/sales/over-time', getSalse);


module.exports = router;
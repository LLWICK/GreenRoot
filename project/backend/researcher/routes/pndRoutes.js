const express = require('express')

const router = express.Router()

const {
    getPnd,
    getUserPnd,
    getAPnd,
    createPnd,
    updatePnd,
    deletePnd
} = require('../controller/pndController')

// Import middleware
//const { authenticateUser} = require('../../admin/middleware/auth.middleware')

//multer
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'researcher/uploads/' });

//Get all pnd posts
router.get('/', getPnd)

//Get user pnd posts
router.get('/my-pnd', getUserPnd)

//Get a single pnd post
router.get('/:id', getAPnd)

//Create new pnd post
router.post('/', uploadMiddleware.single('file'), createPnd)

//Update a pnd post
router.patch('/:id', updatePnd)

//Delete a pnd post
router.delete('/:id', deletePnd)

module.exports = router
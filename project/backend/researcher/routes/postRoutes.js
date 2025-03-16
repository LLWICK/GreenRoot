const express = require ('express')

const router = express.Router()

const {
    getPosts,
    getUserPosts,
    getAPost,
    createPost,
    updatePost,
    deletePost
} = require('../controller/postController')


// Import middleware
const { authenticateUser} = require('../../admin/middleware/auth.middleware')

//multer
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'researcher/uploads/' });


//Get all posts
router.get('/', getPosts)

//Get user posts
router.get('/my-posts', authenticateUser, getUserPosts)

//Get a single post
router.get('/:id', getAPost)

//Create new post
router.post('/', authenticateUser, uploadMiddleware.single('file'), createPost)

//Update a post
router.patch('/:id', authenticateUser, updatePost)

//Delete a post
router.delete('/:id', authenticateUser, deletePost)

module.exports = router
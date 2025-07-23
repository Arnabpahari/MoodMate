const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, postController.createPost);
router.get('/all', postController.getAllPosts);
router.post('/reply/:postId', authMiddleware, postController.addReply);
router.delete('/delete/:postId', authMiddleware, postController.deletePost);
router.delete('/reply/:postId/:replyIndex', authMiddleware, postController.deleteReply);

module.exports = router;

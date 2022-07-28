const express = require('express');
const { createPost, updatePost, getSinglePost, getAllPost, likePost, unlikePost, commentPost } = require('../controllers/postController');
const router = express.Router();

// create post
router.post('/create', createPost);

// update post
router.put('/update/:id', updatePost);

// get a post
router.get('/:id', getSinglePost);

// get all post
router.get('/', getAllPost);

// like a post
router.put('/like', likePost)

// unlike a post 
router.put('/unlike', unlikePost)

//comment a post 
router.put('/comment/:id', commentPost)

// delete a post 



module.exports = router;
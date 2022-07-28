const express = require('express');
const { followuser, unfollowuser, updateProfile, getAllusers, getFollowingusers, getSingleUser } = require('../controllers/userController');
const router = express.Router();

// update user 
// delete user 
// get a user 
// follow a user 
// unfollow a user 

router.get('/all/:id',getAllusers)
router.get('/:id',getSingleUser)
router.get('/following/:id',getFollowingusers)
router.put('/update/:id',updateProfile)
router.put('/follow/:id',followuser)
router.put('/unfollow/:id',unfollowuser)




module.exports = router ;
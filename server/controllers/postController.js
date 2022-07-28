const Post = require('../models/postSchema')


// CREATE POST 
exports.createPost = async (req, res) => {
    const { title, description, image, postedBy } = req.body
    try {
        if (!title || !description ) {
            return res.status(403).json({ error: "please add all fields" })
        }
        const data = await Post.create({
            title,
            description,
            image,
            postedBy
        })
        return res.status(201).json({ success: "Post created successfully", post:data })

    } catch (error) {
        console.log("error: " + error)
    }
}



// UPDATE POST 
exports.updatePost = async (req, res) => {
    const { title, description } = req.body;
    const id = req.params.id;
    try {
        if (!title || !description) {
            return res.status(403).json({ error: "please add all fields" })
        }
        const data = await Post.findByIdAndUpdate(id, {
            $set: {
                title,
                description
            }
        }, {
            new: true
        })
        return res.status(200).json({ success: "update successful", data })
    } catch (error) {
        console.log("error: " + error)
    }
}




// GET ALL POST 
exports.getAllPost = async (req, res) => {
    try {
        const data = await Post.find()
        .populate("postedBy","_id username profilePic")
        .sort("-createdAt")
        return res.status(200).json({ posts: data })
    } catch (error) {
        console.log("error: " + error)
    }
}



// GET SINGLE POST 
exports.getSinglePost = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Post.findById(id)
        res.status(201).json({ post: data })
    } catch (error) {
        console.log("error" + error)
    }
}


// LIKE A POST 
exports.likePost = async (req, res) => {
    const { userId, postId } = req.body;
    try {
        const checkLike = await Post.findById(postId);
        if (checkLike.likes.includes(userId)) {
            return res.status(404).json({ error: "you already liked the post" })
        }

        const data = await Post.findByIdAndUpdate(postId, {
            $push: {
                likes: userId
            }
        }, {
            new: true
        })
        return res.status(200).json({ success: "Liking successful", data })
    } catch (error) {
        console.log("error: " + error)
    }
}



// UNLIKE A POST 
exports.unlikePost = async (req, res) => {
    const { userId, postId } = req.body;
    try {
        const checkLike = await Post.findById(postId);
        if (!checkLike.likes.includes(userId)) {
            return res.status(404).json({ error: "Please like first to unlike" })
        }

        const data = await Post.findByIdAndUpdate(postId, {
            $pull: {
                likes: userId
            }
        }, {
            new: true
        })
        return res.status(200).json({ success: "UnLiking successful", data })
    } catch (error) {
        console.log("error: " + error)
    }
}




// COMMENT A POST 
exports.commentPost = async (req, res) => {
    const { text, postedBy } = req.body;
    const postId = req.params.id;
    try {
        if (!text) {
            return res.status(400).json({ error: "Please add comment ,before commenting" })
        }
        const data = await Post.findByIdAndUpdate(postId, {
            $push: {
                comments: {
                    text,
                    postedBy
                }
            }
        }, {
            new: true
        });
        return res.status(201).json({ success: "comments added successful", comments: data.comments })
    } catch (error) {
        console.log("error: " + error)
    }
}
const User = require('../models/userSchema')


// FOLLOW USER 
exports.followuser = async (req, res) => {
    const ownId = req.params.id
    const userId = req.body.userid
    try {
        const user = await User.findById(userId);
        if (user.followers.includes(ownId)) {
            return res.status(404).json({ error: "You  already follow this acount" })
        }
        else {
            const followerResult = await User.findByIdAndUpdate(userId, {
                $push: { followers: ownId }
            }, {
                new: true
            })
            if (followerResult) {
                const followingResult = await User.findByIdAndUpdate(ownId, {
                    $push: { followings: userId }
                }, {
                    new: true
                })

                if (followerResult && followingResult) {
                    return res.status(200).json({ success: "following successful", followerResult, followingResult })
                }
            }
        }
    } catch (error) {
        console.log("error : " + error)
    }
}




// UNFOLLOW USER 
exports.unfollowuser = async (req, res) => {
    const ownId = req.params.id
    const userId = req.body.userid
    try {
        const user = await User.findById(userId);
        if (!user.followers.includes(ownId)) {
            return res.status(404).json({ error: "You  are not follower user of this acount" })
        }
        else {
            const followerResult = await User.findByIdAndUpdate(userId, {
                $pull: { followers: ownId }
            }, {
                new: true
            })
            if (followerResult) {
                const followingResult = await User.findByIdAndUpdate(ownId, {
                    $pull: { followings: userId }
                }, {
                    new: true
                })

                if (followerResult && followingResult) {
                    return res.status(200).json({ success: "unfollowing successful", followerResult, followingResult })
                }
            }
        }

    } catch (error) {
        console.log("error : " + error)
    }
}



// UPDATE USER PROFILE 

exports.updateProfile = async (req,res)=>{
    const {username,email} = req.body;
    const id = req.params.id;
    try {
        if(!username || !email){
            return res.status(400).json({error:"require all fields"})
        }
        const data = await User.findByIdAndUpdate(id,{
            $set:{
                username,
                email
            }
        },{
            new:true
        })

        return res.status(200).json({success:"profile update successful",user:data})
    } catch (error) {
       console.log(error) 
    }
}



// GET SINGLE USER 
exports.getSingleUser = async (req,res) =>{
    const userid = req.params.id
       try {
        if(!userid){
            return res.status(404).json({error:"user not find "})
        }
        const user = await User.findById(userid);
        return res.status(200).json({success:"user find success",user})

       } catch (error) {
        console.log("error"+error)
       }
}



// GET ALL USERS 
exports.getAllusers = async (req,res) =>{
     const ownid = req.params.id
    try {
        const users = await User.find({
            _id:{$ne:ownid}
        })
        .select(['-password','-email','-phone'])
        if(!users){
            return res.status(404).json({error:"cannot find any user"})
        }
        return res.status(200).json({success:"get successful",users})
    } catch (error) {
        console.log('error'+error);
    }
}



// GET FOLLOWING USERS 
exports.getFollowingusers = async (req,res)=>{
     const id = req.params.id
    try {
        const users = await User.find({
            followers:{$in:[id]}
        })
        .select(['-password','-email','-phone'])
        if(!users){
            return res.status(404).json({error:"cannot find any user"})
        }
        return res.status(200).json({success:"get following successful",users})
        
    } catch (error) {
        console.log('error'+error);
    }
}
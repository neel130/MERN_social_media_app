const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    likes:{
        type:Array,
        default:[]
    },
    comments:[
       { text:String,
        postedBy:String
    }
    ],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})


const Post = mongoose.model("Post",postSchema)

module.exports = Post;
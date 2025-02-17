import mongoose, { model } from "mongoose"
export const likeschema=new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    blogid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        required:true
    }
},{timestamps:true})

const Like=mongoose.model("Like",likeschema,"Likes")
export default Like
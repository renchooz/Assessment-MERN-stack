import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       unique:true
    },
    phone:{
         type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    }
})
const UserModel = mongoose.model('user',userSchema)
export default UserModel
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true,
       unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    website:{
        type:Number,
        required:true
    }
})
const UserModel = mongoose.model('user',userSchema)
export default UserModel
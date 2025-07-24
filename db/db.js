import mongoose from "mongoose"
import "dotenv/config"

const dbConnection = async()=>{
    try {
       await mongoose.connect(`${process.env.URI}/assessment`)
        console.log("Db connected")
    } catch (error) {
        console.log(error.message +"errr in db")
    }
}

export default dbConnection
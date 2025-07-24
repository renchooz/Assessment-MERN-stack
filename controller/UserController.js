import UserModel from "../model/user"

export const setUser = async(req,res)=>{
    const {name,email,phone,website} = req.body
    try {
        if(!name||!email||!phone||!website){
            return res.json({status:false,message:"All fields are required"})
        }
        const checkUser = await UserModel.findOne({email})
        if(checkUser){
             return res.json({status:false,message:"alredy registered"})
        }
        const setUser = new UserModel({
            name,
            email,
            phone,
            website
        })
 await setUser.save()
 return res.json({status:true,message:"created sucessfully"})
    } catch (error) {
         return res.json({status:false,message:error.message})
    }
}
import UserModel from "../model/user.js";

export const setUser = async (req, res) => {
  const { name, email, phone, website } = req.body;
  try {
    if (!name || !email || !phone || !website) {
      return res.json({ status: false, message: "All fields are required" });
    }
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.json({ status: false, message: "alredy registered" });
    }
    const setUser = new UserModel({
      name,
      email,
      phone,
      website,
    });
    await setUser.save();
    return res.json({ status: true, message: "created sucessfully",setUser });
  } catch (error) {
    return res.json({ status: false, message: error.message });
  }
};
export const getUser = async(req,res)=>{
    try {
        const User = await UserModel.find({})
        if(!User){
            return res.json({ status: false, message: "user not found" });
        }
        return res.json({status:true,User})
    } catch (error) {
        
    }
}
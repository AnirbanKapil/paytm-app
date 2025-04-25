
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";


const registerUser = asyncHandler(async (req,res) => {
    const {firstname,lastname,password} = req.body
    if([firstname,lastname,password].some((field)=> !field || field.trim() === "")){
        throw new Error("All fields must be filled");
    }
    const existedUser = await User.findOne({firstname,lastname}) 
    if(existedUser){
        throw new Error("User already exist!")
    }
    await User.create({
        firstname,
        lastname,
        password
    })
    res.status(201).json({ message: "User registered successfully" });
})


export {registerUser};
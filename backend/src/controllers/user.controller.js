
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";


const registerUser = asyncHandler(async (req,res) => {
    const {firstname,lastname,password,username} = req.body
    if([firstname,lastname,password,username].some((field)=> !field || field.trim() === "")){
        throw new Error("All fields must be filled");
    }
    const existedUser = await User.findOne({firstname,lastname}) 
    if(existedUser){
        throw new Error("User already exist!")
    }
    const user = await User.create({
        firstname,
        lastname,
        password,
        username : username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select("-password")
    
    if(!createdUser){
        throw new Error("Error creating user")
    }

    res.status(201).json({ message: "User registered successfully",data : createdUser});
})



// const loginUser = asyncHandler(async (req,res) => {
//     const {username,password} = req.body
//     if(!(username || password)){
//         throw new Error("username and password are required")
//     }

    
// })


export {registerUser};
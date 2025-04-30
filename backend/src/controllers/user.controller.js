
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";


const generateAccessAndRefreshToken = async function (userId) {
    try {
      const user = await User.findById(userId)
      const accessToken = await user.generateAccessToken()
      const refreshToken = await user.generateRefreshToken()

      user.refreshToken = refreshToken
      user.save({validateBeforeSave : false})

      return {accessToken , refreshToken}

    } catch (error) {
        throw new Error("Error generating access and refresh token")
    }
}



const registerUser = asyncHandler(async (req,res) => {
    const {firstname,lastname,password,username} = req.body
    if([firstname,lastname,password,username].some((field)=> !field || field.trim() === "")){
        throw new Error("All fields must be filled");
    }
    const existedUser = await User.findOne({username}) 
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



const loginUser = asyncHandler(async (req,res) => {
    const {username,password} = req.body
    if(!(username || password)){
        throw new Error("username and password are required")
    }

    const user = await User.findOne({username})

    if(!user){
        throw new Error("User not found")
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new Error("Invalid password")
    }
    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id)

    if(!(accessToken || refreshToken)){
        throw new Error("Error generating tokens")
    }

    const loggedInUser = await User.findOne(user._id).select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure : true
    }

    return res.status(200)
              .cookie("accessToken",accessToken,options)
              .cookie("refreshToken",refreshToken,options)
              .json({
                data : loggedInUser,
                message : "User loggedIn successfully"
              })
    
})


const logoutUser = asyncHandler(async (req,res) => {
   await User.findByIdAndUpdate(
    req.user._id,
    {
        $unset : {
           refreshToken : ""
        }
    },
    {
        new : true
    }
)  
   const options = {
      httpOnly : true,
      secure : true
   }

   return res.status(200)
             .clearCookie("accessToken",options)
             .clearCookie("refreshToken",options)
             .json({
                status : 200,
                message : "User logged out"
             }) 
})


const changePassword = asyncHandler(async (req,res) => {
    const {oldpassword,newpassword} = req.body
    
    if(!(oldpassword || newpassword)){
        throw new Error("All fields are required")
    }
    
    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldpassword)
    
    if(!isPasswordCorrect){
        throw new Error("Incorrect old password")
    }
    
    user.password = newpassword
    await user.save({validateBeforeSave : false})
    
    return res.status(201).json({
        message : "Password changed successfully"
    })
})


export {registerUser,loginUser,logoutUser,changePassword};
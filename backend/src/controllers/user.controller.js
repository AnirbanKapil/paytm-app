
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Account } from "../models/account.model.js";


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
    const userId = createdUser?._id

    const account = await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })
    
    const balance = account.balance


    res.status(201).json({ message: "User registered successfully",data : createdUser , balance : balance});
})



const loginUser = asyncHandler(async (req,res) => {
    const {username,password} = req.body
    if(!username?.trim() || !password?.trim()){
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
    
    if(!oldpassword?.trim() || !newpassword?.trim()){
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


const updateUserDetail = asyncHandler(async (req,res) => {
    const {firstname,lastname} = req.body
    if(!(firstname || lastname)){
        throw new Error("Required field is empty")
    }
    const user = await User.findByIdAndUpdate(req.user._id,{
        $set : {
            firstname,
            lastname
        }
    },{
        new : true
    }).select("-password -refreshToken")
    return res.status(201).json({
        data : user,
        message : "updated successfully"
    })

})


const getUsers = asyncHandler( async (req,res) => {
    const filter = req.query.filter || ""
    const currentUserId = req.user.id 
    const users = await User.find({
    _id: { $ne: currentUserId },    
        $or : [
            {
                firstname : {
                    "$regex" : filter
                }
            },{
                lastname : {
                    "$regex" : filter
                }
            }
        ]
    }).select("-password -refreshToken" )

    return res.status(200).json({
        data : users,
        message : "Required users fetched"
    })
})


const getUserById =asyncHandler ( async(req,res) => {
    
    const userId = req.params.id
    
    if(!userId){
        throw new Error("UserId not found")
    }
    const user = await User.findById(userId).select("-password -refreshToken")

    return res.status(200).json({
        data : user,
        message : "Required user fetched"
    })

})

export {registerUser,loginUser,logoutUser,changePassword,updateUserDetail,getUsers,getUserById};
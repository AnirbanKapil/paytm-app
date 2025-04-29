import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import asyncHandler from "../utils/asyncHandler.js"


const verifyJWT = asyncHandler(async (req,res,next) => {
    try {
        const token = req.cookies?.accessToken || req?.headers("Authorization")?.replace("Bearer ","")
        if(!token){
            throw new Error("unauthorized request")
        }
        const decodedToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user){
            throw new Error("Invalid access token")
        }
        req.user = user
        next()
    } catch (error) {
        throw new Error(error?.message)
    }
})

export default verifyJWT
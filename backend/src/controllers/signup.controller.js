
import asyncHandler from "../utils/asyncHandler.js";


const signUpUser = asyncHandler((req,res) => {
    res.send("Signup Here")
})


export {signUpUser};
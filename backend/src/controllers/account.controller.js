import { Account } from "../models/account.model.js";
import asyncHandler from "../utils/asyncHandler.js";


const checkBalance = asyncHandler(async (req,res) => {
    
    const user = await Account.findOne({
        userId : req.user._id
    })

    if(!user){
        throw new Error("Account not found")
    }
    return res.status(200).json({
        balance : user.balance
    })
})

const transferAmount = asyncHandler(async (req,res) => {
    
})





export{checkBalance}
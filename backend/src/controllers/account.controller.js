import mongoose from "mongoose";
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
    
    const session = await mongoose.startSession()
    
    try {

        session.startTransaction()

        const {amount,receiver} = req.body
    
        const senderAccount = await Account.findOne({userId : req.user._id}).session(session)
        
        if(!senderAccount){
            throw new Error("Error in the account")
        }
        if(senderAccount.balance < amount){
            throw new Error("Insufficient balance")
        }

        const receiverAccount = await Account.findOne({userId : receiver}).session(session)
        
        if(!receiverAccount){
            await session.abortTransaction()
            throw new Error("Unable to find the account")
        }

        await Account.updateOne({userId : req.user._id},{$inc : {balance : -amount}}).session(session)
        await Account.updateOne({userId : receiver},{$inc : {balance : amount}}).session(session)

        await session.commitTransaction()

        return res.status(201).json({message : "Transaction successful"})

    } catch (error) {
        await session.abortTransaction()
        throw new Error(`${error.message}` || Error in transaction) 
    }finally{
        session.endSession() 
    }
})





export{checkBalance,transferAmount}
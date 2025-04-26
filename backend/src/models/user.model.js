import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        firstname : {
            type : String,
            required : true
        },
        lastname : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        username : {
            type : String,
            required : true
        }
    },
    {timestamps : true}
)

userSchema.pre("save", async function (next) {
    try {
        if( !this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password,10)
        next()
    } catch (error) {
        console.log(error)  
    }
})



export const User = mongoose.model("User",userSchema)



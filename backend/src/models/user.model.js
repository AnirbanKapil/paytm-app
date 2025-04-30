import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
    {
        firstname : {
            type : String,
            required : true,
            trim : true,
            maxLength : 50
        },
        lastname : {
            type : String,
            required : true,
            trim : true,
            maxLength : 50
        },
        password : {
            type : String,
            required : true
        },
        username : {
            type : String,
            required : true,
            unique : true,
            trim : true,
            lowercase : true,
            maxLength : 30,
            minLength : 3
        },
        refreshToken : {
            type : String
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

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id : this.id,
            username : this.username,
            firstname : this.firstname,
            lastname : this.lastname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id : this.id 
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userSchema)



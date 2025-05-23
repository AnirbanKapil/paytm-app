import mongoose from "mongoose";

import {DB_NAME} from "./name.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error connecting to DB . Msg-",error)
        process.exit(1)
    }
}

export default connectDB
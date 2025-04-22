import dotenv from "dotenv";

import { app } from "./src/app.js";

import connectDB from "./src/db/index.js";

dotenv.config({
    path : "./.env"
})

connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server is up and running on port 3000")
    })
})
.catch((error)=> console.log("Connection failed",error))



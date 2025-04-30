import express from "express";
import cookieParser from "cookie-parser";

const app = express();







app.use(express.json({limit : "16kb"}))

app.use(express.urlencoded({extended:true,limit : "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())



// routes import

import signUpRouter from "./routes/signup.routes.js";
import signInRouter from "./routes/signin.routes.js"
import signOutRouter from "./routes/signout.routes.js"
import changePasswordRouter from "./routes/update.routes.js"


// routes decleration

app.use("/api/v1",signUpRouter)
app.use("/api/v1",signInRouter)
app.use("/api/v1",signOutRouter)
app.use("/api/v1",changePasswordRouter)
export {app};

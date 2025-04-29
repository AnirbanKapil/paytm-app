import { Router } from "express";
import { logoutUser } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/signout").post(verifyJWT,logoutUser)

export default router
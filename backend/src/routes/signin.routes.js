import { Router } from "express";
import { loginUser } from "../controllers/user.controller.js";


const router = Router()

router.route("/signin").post(loginUser)
export default router
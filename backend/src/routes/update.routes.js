import { Router } from "express";
import { changePassword } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/changepassword").patch(verifyJWT, changePassword)

export default router
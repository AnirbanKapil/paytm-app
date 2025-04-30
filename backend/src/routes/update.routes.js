import { Router } from "express";
import { changePassword } from "../controllers/user.controller";
import verifyJWT from "../middlewares/auth.middleware";

const router = Router()

router.route("/changepassword").put(verifyJWT, changePassword)

export default router
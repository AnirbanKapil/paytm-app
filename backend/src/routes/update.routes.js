import { Router } from "express";
import { changePassword, updateUserDetail } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/changepassword").patch(verifyJWT, changePassword)
router.route("/updatedetails").patch(verifyJWT,updateUserDetail)

export default router
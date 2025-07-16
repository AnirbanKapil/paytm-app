import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { getUserById } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/getusers").get(verifyJWT,getUsers)
router.route("/getuserid/:id").get(getUserById)

export default router
import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { getUserById } from "../controllers/user.controller.js";

const router = Router()

router.route("/getusers").get(getUsers)
router.route("/getuserid/:id").get(getUserById)

export default router
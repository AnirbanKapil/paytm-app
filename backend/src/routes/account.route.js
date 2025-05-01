import { Router } from "express";
import { checkBalance } from "../controllers/account.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/getbalance").get(verifyJWT,checkBalance)

export default router
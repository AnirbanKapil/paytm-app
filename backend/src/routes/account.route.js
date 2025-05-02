import { Router } from "express";
import { checkBalance, transferAmount } from "../controllers/account.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/getbalance").get(verifyJWT,checkBalance)
router.route("/transfer").post(verifyJWT,transferAmount)

export default router
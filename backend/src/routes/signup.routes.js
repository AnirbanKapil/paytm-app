import { Router } from "express";
import { signUpUser } from "../controllers/signup.controller.js";

const router = Router();

router.route("/signup").get(signUpUser)

export default router;
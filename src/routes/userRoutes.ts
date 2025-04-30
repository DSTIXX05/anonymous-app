console.log("userRoutes.ts loaded");

import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController";

router.get("/print-name", userController.printname);

export default router;
import express from "express";

import { getAllUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/getUser").get(getAllUser);

export default router;
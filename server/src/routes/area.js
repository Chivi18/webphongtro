import express from "express";
import * as controller from "../controllers/area";

const router = express.Router();

router.get("/all", controller.getArea);
export default router

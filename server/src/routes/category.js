import express from"express"
import * as controller from "../controllers/category"

const router=express.Router()

router.get("/all",controller.getcategories)

export default router
import express from "express"
import controller from "../Controller/controller.js"

const router=express.Router()
router.get("/",controller.readWriteFile)

export default router;
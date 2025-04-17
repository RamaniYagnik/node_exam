import taskController from "../controller/Taskcontroller.js";
import express from "express";

const router = express.Router()

router.post("/create", taskController.create);
router.get("/getAllTask", taskController.getAllTask);
router.get("/getSingle/:id", taskController.getTaskById);
router.put("/update/:id", taskController.update);
router.delete("/delete/:id", taskController.delete)

export default router
import express from "express";
import { CourseController } from "../app/controllers/CourseController.js";

const courseRouter = express.Router();
const courseController = new CourseController();

courseRouter.get("/:id/edit", courseController.edit);
courseRouter.get("/create", courseController.create);
courseRouter.post("/store", courseController.store);
courseRouter.get("/:slug", courseController.show);

export { courseRouter };

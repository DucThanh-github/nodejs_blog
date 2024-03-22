import express from 'express';
import { CourseController } from '../app/controllers/CourseController.js';

const courseRouter = express.Router();
const courseController = new CourseController();

courseRouter.get('/:slug', courseController.show);

export { courseRouter };

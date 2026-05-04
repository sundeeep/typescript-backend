import {Router} from "express";
import { createNewCourse } from "../controllers/courseController.js";

const courseRouter = Router();

courseRouter.post("/", createNewCourse)

export default courseRouter;
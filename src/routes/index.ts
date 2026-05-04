import courseRouter from "./courseRouter.js";
import {Router} from "express";

const router = Router();

router.use("/api/v1/courses", courseRouter);

export default router;
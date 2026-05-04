import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";

const createNewCourse = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const newCourseData = request.body;
    console.log("New Course Data: ", newCourseData);
    if (!newCourseData.name.trim() || !newCourseData.instructor.trim() || !newCourseData.price) {
        throw new Error("Course name is required!")
    }
    // 2. call the service function
    // 3. send the http response back to client/ frontend
    response.status(200).json({
        success: true,
        data: newCourseData,
        message: "New Course has been arrived!"
    })
})

export {
    createNewCourse
}
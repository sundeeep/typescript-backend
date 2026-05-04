import type {Request, Response} from "express";

const createNewCourse = async(request: Request, response: Response): Promise<void> => {
    try {
        // 1. take the incoming http request data
        const newCourseData = request.body;
        // 2. call the service function
        // 3. send the http response back to client/ frontend
        response.status(200).json({
            success: true,
            data: newCourseData,
            message: "New Course has been arrived!"
        })
    } catch (error: any) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export {
    createNewCourse
}
import type {Request, Response, NextFunction, RequestHandler} from "express";

const asyncHandler = (fn: (request: Request, response: Response, next: NextFunction) => Promise<void>): RequestHandler => {
    return (request: Request, response: Response, next: NextFunction): void => {
        Promise.resolve(fn(request, response, next)).catch(next)
    }
}

export {
    asyncHandler
}
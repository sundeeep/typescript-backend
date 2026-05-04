import express from "express";
import router from "./routes/index.js";

const app = express()

// Write all the middleware
app.use(express.json())

app.get("/health-check", (_request, response) => {
    try {
        response.status(200).json({
            success: true,
            message: "Server is healthy!",
            data: null
        })
    } catch (error: any) {
        response.status(400).json({
            success: false,
            error: error?.message
        })
    }
})

// routes
app.use("/", router)

// app.use(globalErrorHandler)

export {app}
import dotenv from "dotenv"
dotenv.config()

import express from "express";
import DBconnection from "./connection.js";
import router from "./routes/taskroutes.js";

const app = express()
app.use(express.json())

app.use("/task", router)

DBconnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected with database successfully...");
        console.log(`server running on ${process.env.PORT}`);
    })
})
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', false)

async function DBconnection() {
    try {
        await mongoose.connect(process.env.URL)
    } catch (error) {
        console.log("Cant Connect eith database...");
    }
}

export default DBconnection
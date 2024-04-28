import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import dotenv from 'dotenv'
// require('dotenv').config({path: './env'});


dotenv.config({path: './env'})

 const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error(`Mongo Connection Error: ${error.message}`);
        process.exit(1);
    }
 }

 export default connectDB;
import dotenv from 'dotenv'
// require('dotenv').config({path: './env'});
import connectDB from "./db/index.js";



dotenv.config({path: './env'})


connectDB();
// import { DB_NAME } from "./constants";
// import express from "express";

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Error connecting to MongoDB", error);
//     });
//     console.log("Connected to MongoDB");
//     app.listen(process.env.PORT, () => {
//       console.log("Server listening on port 3000");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB", error);
//   }
// })();


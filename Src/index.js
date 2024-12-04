// import mongoose from "mongoose";
// import { database_Name } from "./constants";
// require('dotenv').config()

import dotenv from"dotenv";
dotenv.config()

import express from "express";
const app = express();

import connectDB from "./Db/index.js"; 
connectDB();




 





app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.mongodb_uri}/${database_Name}`);
//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();

import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv/config.js";
import Routes from "./routes/route.js";
import cors from "cors";
 
const app = express();

//to enable cors so that we can access the api from any domain
app.use(cors());

//to parse the url encoded data
app.use(express.urlencoded({ extended: true }));

//to parse the json data from the request
app.use(express.json());

//to use the routes
app.use("/", Routes);

//extracting db credentials from .env file
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
// Connection with mongoDB
Connection(username, password);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

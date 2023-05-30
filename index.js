import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import DBConnection from "./database/db.js";

const PORT = process.env.PORT || 8000

const app= express();

app.use(cors());
app.use(express.json());
app.use('/', router);


DBConnection();

app.listen(PORT, ()=> console.log("server is runnning on port 8000")); 
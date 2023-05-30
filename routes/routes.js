import express  from "express";
import { uploadFile, downloadFile } from "../controller/file-controller.js";
import upload from "../utils/upload.js";
import File from "../models/file.js";



const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);

router.get('/file/:fileId', downloadFile);



export default router; 
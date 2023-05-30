// import { response } from "express"
import File from "../models/file.js";
import { v4 as uuidv4 } from 'uuid';

export const uploadFile = async(req,res) =>{
    // console.log(req);
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
        uuid: uuidv4()
    }
    // console.log(req);
    try{
        const file = await File.create(fileObj);
        // console.log(file);
        res.status(200).json({path: `http://localhost:8000/file/${file._id}`})
    }catch(err){
        console.log(err);
        res.status(500).json({err: err.message})
    }
}



export const downloadFile = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        file.downloadContent++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}
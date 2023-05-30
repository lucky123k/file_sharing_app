import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DBConnection = async() =>{
    const MONGO_URI = process.env.DATABASE
    try{
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true});
        console.log('connected');
    } catch(error){
        console.error(error);
    }
}

export default DBConnection;
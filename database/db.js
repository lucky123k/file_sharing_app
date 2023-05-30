import mongoose from "mongoose";

const DBConnection = async() =>{
    const MONGO_URI = 'mongodb+srv://lucky:lucky123@cluster0.3gz7edg.mongodb.net/mernstack?retryWrites=true&w=majority'
    try{
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true});
        console.log('connected');
    } catch(error){
        console.error(error);
    }
}

export default DBConnection;
import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is connected');
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONDODB_URI, {
            dbName: 'investmentProject',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB connected');

    } 
    
    catch(error){
        console.log(error);
    }
}
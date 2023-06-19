import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config()

const connectionParams = process.env.MONGO_URI;

mongoose.connect(connectionParams,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connectionPool = mongoose.connection;

connectionPool.on("connected", ()=>{
    console.log("Connected to Mongo");
})

connectionPool.on("error", (err)=>{
    console.error("Failed to connect", err);
    process.exit(1)
})

export {connectionPool}
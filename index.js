import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from'dotenv';
import cors from 'cors';
import router from './routes/userRoute.js';

const app = express();
app.use(cors());
//bodyParser (middleware for passing the json request to body)
app.use(bodyParser.json());
app.use('/api/user',router);
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;



//mongoose is used to connect database to the project
mongoose
    .connect(MONGOURL)
    .then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error)=>{
        console.log("Error");
    })
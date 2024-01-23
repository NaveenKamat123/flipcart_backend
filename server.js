import express from 'express';
import { Connection } from './database/db.js';
import dotenv from 'dotenv'
// import DefaultData from './default.js';

import bodyParser from 'body-parser';
import cors from 'cors'
import Router from './routes/route.js';

const app=express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());


const PORT=8000;

Connection();

app.use('/',Router);



app.listen(PORT,()=>{
    console.log('server connected')
})

// DefaultData();
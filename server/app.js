import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from 'mongoose';

import router from './routers/router.js';
import userRouter from './routers/userRouter.js';

import cors from 'cors';

const PORT = 3000;

mongoose
.connect(process.env.DATABASE_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB error", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(userRouter);

app.get('/', (req, res) => {
    res.status(200).json({msg: "Root route"});
});

app.listen(process.env.PORT | PORT, () => {
    console.log("Server listens on port", PORT);
});
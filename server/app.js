import dotenv from 'dotenv';
dotenv.config();

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';

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

const admin = new AdminJS({});
const adminRouter = AdminJSExpress.buildRouter(admin);

app.use(cors());
app.use(express.json());
app.use(router);
app.use(userRouter);
app.use(admin.options.rootPath, adminRouter);

app.get('/', (req, res) => {
    res.status(200).json({msg: "Root route"});
});

app.listen(process.env.PORT | PORT, () => {
    console.log("Server listens on port", PORT);
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
});
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import express, { Express } from "express";

import cors from 'cors';

import userRouter from './routers/userRouter.js';
import categoryRouter from './routers/categoryRouter.js';

import { AdminService } from './services/admin.service.js';


const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.DATABASE_URL || "")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error", err));

const adminPanel: AdminService = new AdminService();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(categoryRouter);

app.use(adminPanel.admin.options.rootPath, adminPanel.adminRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log("Server listens on port", PORT);
    console.log(`AdminJS started on http://localhost:${PORT}${adminPanel.admin.options.rootPath}`);
});
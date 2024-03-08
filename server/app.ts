import dotenv from 'dotenv';
dotenv.config();

// import AdminJS from 'adminjs';
// import AdminJSExpress from '@adminjs/express';
// import * as AdminJSMongoose from '@adminjs/mongoose'
// import MongoStore from 'connect-mongo'

import express, { Express, Request, Response } from "express";
import mongoose from 'mongoose';

import router from './routers/router.js';
import userRouter from './routers/userRouter.js';

import cors from 'cors';
// import UserModel from './models/User.js';



// const authenticate = async (email, password) => {
//     if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//         return Promise.resolve(DEFAULT_ADMIN);
//     }
//     return null;
// }

// AdminJS.registerAdapter({
//     Resource: AdminJSMongoose.Resource,
//     Database: AdminJSMongoose.Database,
// })

const PORT = process.env.PORT || 3000;

const DEFAULT_ADMIN: object = {
    email: 'admin@example.com',
    password: 'password',
}


mongoose
    .connect(process.env.DATABASE_URL || "")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error", err));

// const adminOptions = {
//     resources: [UserModel],
// }

// const sessionStore =  MongoStore.create({
//     client: mongoose.connection.getClient(),
//     collectionName: "session",
//     stringify: false,
//     autoRemove: "interval",
//     autoRemoveInterval: 1
// });

// const admin = new AdminJS(adminOptions);
// const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
//     admin,
//     {
//         authenticate,
//         cookieName: 'adminjs',
//         cookiePassword: 'sessionsecret',
//     },
//     null,
//     {
//         store: sessionStore,
//         resave: true,
//         saveUninitialized: true,
//         secret: 'sessionsecret',
//         cookie: {
//             httpOnly: process.env.NODE_ENV === 'production',
//             secure: process.env.NODE_ENV === 'production',
//         },
//         name: 'adminjs',
//     }
// );




const app: Express = express();

app.use(cors());
app.use(express.json());
// app.use(router);
// app.use(userRouter);
// app.use(admin.options.rootPath, adminRouter);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg: "Root route"});
});

app.listen(process.env.PORT || PORT, () => {
    console.log("Server listens on port", PORT);
    //console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
});
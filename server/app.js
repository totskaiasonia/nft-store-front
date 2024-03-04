import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import router from './routers/router.js';
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.status(200).json({msg: "Root route"});
});

app.listen(process.env.PORT | PORT, () => {
    console.log("Server listens on port", PORT);
});
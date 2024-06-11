import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

let gfs: any;
mongoose
    .connect(process.env.DATABASE_URL || "")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error", err));

const conn = mongoose.connection;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})

export { gfs };
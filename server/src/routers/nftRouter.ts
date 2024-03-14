import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import crypto from 'crypto';
import path from 'path';

import * as NftController from '../controllers/nft.controller.js';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


const router = express.Router();
const storage = new GridFsStorage({
    url: process.env.DATABASE_URL || '',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
              if (err) {
                return reject(err);
              }
              const filename = buf.toString('hex') + path.extname(file.originalname);
              const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
              };
              resolve(fileInfo);
            });
          });
    }
});


const upload = multer({ storage });


router.get('/nfts/:id', NftController.getByid);

router.get('/nfts', NftController.getAll);

router.post('/nfts', upload.single('file'), NftController.create);

router.patch('/nfts/:id', NftController.update);

router.delete('/nfts/:id', NftController.remove);

export default router;
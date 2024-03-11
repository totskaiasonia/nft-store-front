import express from 'express';
import * as NftController from '../controllers/nft.controller.js';
import multer from 'multer';

const router = express.Router();

const upload = multer();


router.get('/nfts/:id', NftController.getByid);

router.get('/nfts', NftController.getAll);

router.post('/nfts', upload.single('file'), NftController.create);

router.patch('/nfts/:id', NftController.update);

router.delete('/nfts/:id', NftController.remove);

export default router;
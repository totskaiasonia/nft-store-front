import express from 'express';
import * as NftController from '../controllers/nft.controller.js';

const router = express.Router();


router.get('/nfts', NftController.getAll);

router.get('/nfts/:id', NftController.getByid);

router.post('/nfts', NftController.create);

router.patch('/nfts/:id', NftController.update);

router.delete('/nfts/:id', NftController.remove);

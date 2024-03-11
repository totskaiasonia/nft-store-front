import express from 'express';

import * as CategoryController from '../controllers/category.controller.js';

const router = express.Router();


router.get('/categories/:name', CategoryController.getByName);
router.get('/categories', CategoryController.getAll);

router.post('/categories', CategoryController.create);

router.patch('/categories/:id', CategoryController.update);

router.delete('/categories/:id', CategoryController.remove);


export default router;
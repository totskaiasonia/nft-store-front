import express from 'express';

import * as UserController from '../controllers/userController.js';

const router = express.Router();


router.get('/users', UserController.getAll)

router.post('/auth/login', UserController.login);
router.post('/auth/register', UserController.register);

router.get('/users/:id', UserController.getById)

router.patch('/users/:id', UserController.update)

router.delete('/users/:id', UserController.remove)



export default router;
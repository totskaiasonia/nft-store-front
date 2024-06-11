import express, { Router } from 'express';

import * as UserController from '../controllers/user.controller.js';
import * as AuthController from '../controllers/auth.controller.js';

const router: Router = express.Router();


router.get('/users', UserController.getAll)

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

router.get('/users/:id', UserController.getById)

router.patch('/users/:id', UserController.update)

router.delete('/users/:id', UserController.remove)



export default router;
import express from 'express';

import * as UserController from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.get('/users')

userRouter.post('/auth/login', UserController.login);
userRouter.post('/auth/register', UserController.register);

userRouter.get('/users/:id')

userRouter.patch('/users/:id')

userRouter.delete('/users/:id')



export default userRouter;
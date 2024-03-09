import { Request, Response } from "express";

import {IUserModel, UserModel} from '../models/User.model.js';

import userService from '../services/user.service.js';
import authService from '../services/auth.service.js';



export const getById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
    
        const userDoc = await userService.findUserById(id);
    
        const {passwordHash, ...userData} = userDoc?._doc;
    
        return res.status(200).json(
            userData
        )
    } catch (error) {
        res.status(500).json({
            message: "Failed to get",
        });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const users: IUserModel[] | null = await userService.findAll();
        
        const result = users?.map(user => {
            const {passwordHash, ...userData} = user._doc;
            return userData;
        });
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({
            message: "Failed to get",
        });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const {username, password, gender} = req.body;

        const userDoc = await UserModel.findById(id);

        let hash = null;
        if (!(await authService.checkPassword(password, userDoc?._doc.passwordHash))) {
            hash = await authService.generateHash(password);
        }

        const update = {
            email: userDoc?._doc.email,
            passwordHash: hash ? hash : userDoc?._doc.passwordHash,
            username: username,
            gender: gender
        }

        const updatedUser = await userService.updateUser(id, update);

        res.status(200).json(
            updatedUser
        )

    } catch (error) {
        res.status(500).json({
            message: "Failed to update",
        });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
    
        const userDoc = await UserModel.findByIdAndDelete(id);

        const {passwordHash, ...userData} = userDoc?._doc;
    
        return res.status(200).json(
            userData
        )
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete",
        });
    }
}

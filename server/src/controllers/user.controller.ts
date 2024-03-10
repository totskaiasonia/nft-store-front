import { Request, Response } from "express";

import { IUserModel } from '../models/User.model.js';

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

        const userData = await userService.updateUser(id, username, password, gender);

        res.status(200).json(
            userData
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
    
        const userDoc = await userService.deleteUserById(id);

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

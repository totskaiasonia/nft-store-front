import { Request, Response } from "express";

import authService from '../services/auth.service.js';

export const register = async (req: Request, res: Response) => {
    try {
        const {email, password, username, gender} = req.body;

        const userData = await authService.register(email, password, username, gender);

        res.status(200).json(userData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to register",
        });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        const userData = await authService.login(email, password);

        if (!userData)
            res.status(401).json({msg: "invalid credentials"});

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({
            message: "Failed to login",
        });
    }
}
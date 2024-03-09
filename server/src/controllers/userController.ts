import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Request, Response } from "express";

import {UserModel} from '../models/User.js';


export const register = async (req: Request, res: Response) => {
    try {
        const {email, password, username, gender} = req.body;

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        const user = new UserModel({
            email,
            passwordHash: hash,
            username,
            gender
        });

        const userDoc = await user.save();

        const token = jwt.sign(
            {
                _id: userDoc._id,
            },
            process.env.JWT_PHRASE || "your secret phrase",
            {
                expiresIn: '30d',
            }
        );

        const {passwordHash, ...userData} = userDoc._doc;

        res.status(200).json({
            ...userData,
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to register",
        });
    }
    

}

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        const userDoc = await UserModel.findOne({email: email});

        
        if (userDoc == null || !bcrypt.compare(password, userDoc._doc.passwordHash)) {
            res.status(401).json({msg: "invalid credentials"});
        }

        const token = jwt.sign(
            {
                _id: userDoc?._id,
            },
            process.env.JWT_PHRASE || "your secret phrase",
            {
                expiresIn: '30d',
            }
        );


        const {passwordHash, ...userData} = userDoc?._doc;
        res.status(200).json({
            token,
            ...userData
        });


    } catch (error) {
        res.status(500).json({
            message: "Failed to login",
        });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
    
        const userDoc = await UserModel.findById(id);
    
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
        const users = await UserModel.find();
        
        const result = users.map(user => {
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
        if (!bcrypt.compare(password, userDoc?._doc.passwordHash)) {
            const salt = await bcrypt.genSalt(12);
            hash = await bcrypt.hash(password, salt);
        }
        const update = {
            email: userDoc?._doc.email,
            passwordHash: hash ? hash : userDoc?._doc.passwordHash,
            username: username,
            gender: gender
        }

        const updatedUser = await UserModel.findByIdAndUpdate({_id: id}, update);

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
    
        const userDoc = await UserModel.findByIdAndDelete(id)
        console.log(userDoc?._doc);

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

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js';


export const register = async (req, res) => {
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
            process.env.JWT_PHRASE,
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

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userDoc = await UserModel.findOne({email: email});

        console.log(userDoc._doc)
        
        if (userDoc == null || !bcrypt.compare(password, userDoc._doc.passwordHash)) {
            res.status(401).json({msg: "invalid credentials"});
        }

        const token = jwt.sign(
            {
                _id: userDoc._id,
            },
            process.env.JWT_PHRASE,
            {
                expiresIn: '30d',
            }
        );


        const {passwordHash, ...userData} = userDoc._doc;
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

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
    
        const userDoc = await UserModel.findById(id);
    
        const {passwordHash, ...userData} = userDoc._doc;
    
        return res.status(200).json(
            userData
        )
    } catch (error) {
        res.status(500).json({
            message: "Failed to get",
        });
    }
}
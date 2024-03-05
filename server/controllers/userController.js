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
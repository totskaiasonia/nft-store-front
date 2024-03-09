import { IUser, IUserModel, UserModel } from "../models/User.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userService from "./user.service.js";



class AuthService {
    async register(email: string, password: string, username: string, gender: string) {
        const hash: string = await this.generateHash(password);

        const userDoc: IUserModel = await userService.createUser({
            email,
            passwordHash: hash,
            username,
            gender
        });

        const token: string = this.generateToken(userDoc);

        const {passwordHash, ...userData} = userDoc._doc;

        return {
            token,
            ...userData
        };
    }

    async login(email: string, password: string) {
        const userDoc: IUserModel | null = await userService.findUser({email});

        if (userDoc == null || !(await this.checkPassword(password, userDoc._doc.passwordHash))) {
            return null;
        }

        const token: string = this.generateToken(userDoc);

        const {passwordHash, ...userData} = userDoc?._doc;

        return {
            token,
            ...userData
        };
    }

    generateToken(user: IUserModel): string {
        const payload = {
            id: user._id,
            email: user.email
        };

        const secretKey: string | undefined = process.env.JWT_PHRASE;

        return jwt.sign(
            payload,
            secretKey || "secret phrase",
            {
                expiresIn: '30d',
            }
        );
    }

    async generateHash(password: string): Promise<string> {
        const salt: string = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    }

    async checkPassword(passwordOne: string, passwordTwo: string): Promise<boolean> {
        return await bcrypt.compare(passwordOne, passwordTwo);
    }
}

export default new AuthService();
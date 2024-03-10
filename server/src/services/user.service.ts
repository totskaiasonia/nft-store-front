import { IUser, IUserModel, UserModel } from "../models/User.model.js";
import authService from '../services/auth.service.js';

class UserService {
    async createUser(userData: Partial<IUser>): Promise<IUserModel> {
        return await UserModel.create(userData);
    }

    async findUser(userData: Partial<IUser>): Promise<IUserModel | null> {
        return await UserModel.findOne(userData);
    }

    async findUserById(userId: string): Promise<IUserModel | null> {
        return await UserModel.findById(userId);
    }

    async findAll(): Promise<IUserModel[] | null> {
        return await UserModel.find();
    }

    async updateUser(id: string, username: string, password: string, gender: string): Promise<IUserModel | null> {
        const userDoc = await this.findUserById(id);

        let hash = null;
        if (!(await authService.checkPassword(password, userDoc?._doc.passwordHash))) {
            hash = await authService.generateHash(password);
        }

        return await UserModel.findByIdAndUpdate({_id: id}, {
            email: userDoc?._doc.email,
            username,
            passwordHash: hash,
            gender
        });
    }

    async deleteUserById(id: string): Promise<IUserModel | null> {
        return await UserModel.findByIdAndDelete(id);
    }
}

export default new UserService();
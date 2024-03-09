import { IUser, IUserModel, UserModel } from "../models/User.model.js";

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

    async updateUser(id: string, userData: Partial<IUser>): Promise<IUserModel | null> {
        return await UserModel.findByIdAndUpdate({_id: id}, userData);
    }
}

export default new UserService();
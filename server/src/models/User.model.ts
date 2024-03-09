import { model, Document, Schema } from 'mongoose';

export interface IUser {
    email: string;
    passwordHash: string;
    username: string;
    gender: string;
}

export interface IUserModel extends IUser, Document {
    _doc?: any
}

const UserSchema: Schema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'non-binary', 'dont-specify'],
            default: 'dont-specify'
        }
    },
    {
        timestamps: true,
    }
);

export const UserModel = model<IUserModel>('User', UserSchema);
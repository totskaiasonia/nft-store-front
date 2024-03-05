import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        passwordHash: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'non-binary', 'dont-specify'],
            default: 'dont-specify'
        }
    },
    {
        timestamp: true,
    }
);

export default mongoose.model('User', UserSchema);
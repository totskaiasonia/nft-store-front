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
        }
    },
    {
        timestamp: true,
    }
);

export default mongoose.model('User', UserSchema);
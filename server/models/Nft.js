import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: String
});

const NftSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        file: {
            data: Buffer,
            contentType: String
        },
        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }],
        author: String,
        price: Number,
    },
    {
        timestamp: true,
    }
);

const NftModel = mongoose.model('Nft', NftSchema);
const CategoryModel =  mongoose.model('Category', CategorySchema);

export {NftModel, CategoryModel};
import { model, Types, Document, Schema } from 'mongoose';

export interface INft {
    name: string;
    description: string;
    fileId: string;
    categories: Types.ObjectId[];
    author: string;
    price: number;
}

export interface INftModel extends INft, Document {
    _doc?: any;
}

const NftSchema: Schema = new Schema<INft>(
    {
        name: String,
        description: String,
        fileId: String,
        categories: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
        author: String,
        price: Number,
    },
    {
        timestamps: true,
    }
);

export const NftModel = model<INftModel>('Nft', NftSchema);

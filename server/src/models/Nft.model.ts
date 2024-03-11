import { model, Types, Document, Schema } from 'mongoose';

export interface INft {
    name: string;
    description: string;
    file: {
        data: Buffer;
        contentsType: string;
    };
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
        file: {
            data: Buffer,
            contentsType: String
        },
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

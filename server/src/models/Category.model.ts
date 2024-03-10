import { model, Document, Schema } from 'mongoose';

export interface ICategory {
    name: string;
}

export interface ICategoryModel extends ICategory, Document {
    _doc?: any
}

const CategorySchema: Schema = new Schema<ICategory>(
    {
        name: String
    }
);

export const CategoryModel = model<ICategoryModel>('Category', CategorySchema);
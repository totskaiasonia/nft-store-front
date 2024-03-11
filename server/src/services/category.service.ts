import { CategoryModel, ICategory, ICategoryModel } from "../models/Category.model.js";


class categoryService {
    async createCategory(categoryData: Partial<ICategory>): Promise<ICategoryModel> {
        return await CategoryModel.create(categoryData);
    }

    async findAll(): Promise<ICategoryModel[] | null>{
        return await CategoryModel.find();
    }

    async findByName(name: string): Promise<ICategoryModel | null> {
        return await CategoryModel.findOne({name});
    }

    async unpdateCategory(id: string, categoryData: Partial<ICategory>) {
        return await CategoryModel.findByIdAndUpdate({_id: id}, categoryData);
    }

    async deleteCategoryById(id: string) {
        return await CategoryModel.findByIdAndDelete(id);
    }
}

export default new categoryService();
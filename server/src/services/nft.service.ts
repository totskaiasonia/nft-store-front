import {INft, INftModel, NftModel} from '../models/Nft.model.js';
import categoryService from './category.service.js';

class NftService {
    async createNft(nftData: Partial<INft>, categories: string[]): Promise<INftModel | null> {
        const categoriesIds: any = [];
        for (const item of categories) {
            let categoryData = await categoryService.findByName(item);
            if (!categoryData)
                return null;
            categoriesIds.push(categoryData._id);
        }
        return await NftModel.create({...nftData, categories: categoriesIds});
    }

    async findNft(nftData: Partial<INft>): Promise<INftModel[] | null> {
        return await NftModel.find(nftData);
    }

    async findNftById(id: string): Promise<INftModel | null> {
        return await NftModel.findById(id);
    }

    async findAllNfts(): Promise<INftModel[] | null> {
        return await NftModel.find();
    }

    async updateNft(id: string, nftData: Partial<INft>, categories: string[]): Promise<INftModel | null> {
        const categoriesIds: any = [];
        for (const item of categories) {
            let categoryData = await categoryService.findByName(item);
            if (!categoryData)
                return null;
            categoriesIds.push(categoryData._id);
        }

        return await NftModel.findByIdAndUpdate({_id: id}, {
            ...nftData,
            categories: categoriesIds,
        });
    }

    async deleteNftById(id: string): Promise<INftModel | null> {
        return await NftModel.findByIdAndDelete(id);
    }
}

export default new NftService();
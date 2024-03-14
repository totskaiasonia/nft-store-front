import { Request, Response } from "express";
import nftService from "../services/nft.service.js";

export const create = async (req: Request, res: Response) => {
    try {
        const {name, description, categories, author, price} = JSON.parse(req.body.nftData);

        if (!req.file)
            return res.status(400).json({message: "Empty file"});

        const nftData = await nftService.createNft({
            name,
            description,
            fileId: (req as any).file.id,
            author,
            price
        }, categories);
        
        res.status(200).json(
            nftData
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create nft"
        });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const nfts = await nftService.findAllNfts();
        res.status(200).json(
            nfts
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create nft"
        });
    }
}

export const getByid = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const nftData = await nftService.findNftById(id);

        res.status(200).json(
            nftData
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create nft"
        });
    }

}

export const update = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const {name, description, categories, author, price} = JSON.parse(req.body.nftData);

        const nftData = await nftService.updateNft(id, {name, description, author, price}, categories);

        res.status(200).json(
            nftData
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create nft"
        });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const nftData = await nftService.deleteNftById(id);

        res.status(200).json(
            nftData
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create nft"
        });
    }
}
import { Request, Response } from "express";
import categoryService from "../services/category.service.js";


export const create = async (req: Request, res: Response) => {
    try {
        const {name} = req.body;

        const categoryData = await categoryService.createCategory({name});

        res.status(200).json(
            categoryData
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create",
        });
    }
}

export const getByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;

        const categoryData = await categoryService.findByName(name);

        res.status(200).json(
            categoryData
        );
    } catch (error) {
        res.status(500).json({
            message: "Failed to get",
        });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const categories = await categoryService.findAll();
        res.status(200).json(
            categories
        );
    } catch (error) {
        res.status(500).json({
            message: "Failed to get",
        });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { name } = req.body;

        const categoryData = categoryService.unpdateCategory(id, {name});

        res.status(200).json(
            categoryData
        );
    } catch (error) {
        res.status(500).json({
            message: "Failed to update",
        });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const categoryData = categoryService.deleteCategoryById(id);

        res.status(200).json(
            categoryData
        );
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete",
        });
    }
}

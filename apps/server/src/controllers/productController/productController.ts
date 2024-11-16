import { Request, Response } from 'express';
import { ProductCreateInput, ProductUpdateInput } from './types/productType';
import { productRepository } from '../../repository';


export const productController = {
    async createProduct(req: Request, res: Response) {
        const { name, description, price }: ProductCreateInput = req.body;

        try {
            const product = await productRepository.createProduct({ name, description, price });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: "Error creating product" });
        }
    },

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await productRepository.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: "Error fetching products" });
        }
    },

    async getProductById(req: Request, res: Response) {
        const id = Number(req.params.id);

        try {
            const product = await productRepository.getProductById(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: "Error fetching product" });
        }
    },

    async updateProduct(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { name, description, price }: ProductUpdateInput = req.body;

        try {
            const product = await productRepository.updateProduct(id, { name, description, price });
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: "Error updating product" });
        }
    },

    async deleteProduct(req: Request, res: Response) {
        const id = Number(req.params.id);

        try {
            await productRepository.deleteProduct(id);
            res.json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error deleting product" });
        }
    },
};

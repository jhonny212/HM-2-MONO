import { Product } from '@prisma/client';
import { ProductCreateInput, ProductUpdateInput } from '../controllers/productController/types/productType';
import { prisma } from '../database/db-client'

export const productRepository = {
    async createProduct(data: ProductCreateInput): Promise<Product> {
        return await prisma.product.create({ data });
    },

    async getAllProducts(): Promise<Product[]> {
        return await prisma.product.findMany();
    },

    async getProductById(id: number): Promise<Product | null> {
        return await prisma.product.findUnique({ where: { id } });
    },

    async updateProduct(id: number, data: ProductUpdateInput): Promise<Product> {
        return await prisma.product.update({ where: { id }, data });
    },

    async deleteProduct(id: number): Promise<Product> {
        return await prisma.product.delete({ where: { id } });
    },
};
export interface ProductCreateInput {
    name: string;
    description?: string;
    price: number;
}

export interface ProductUpdateInput {
    name?: string;
    description?: string;
    price?: number;
}

export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

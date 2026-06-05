import { apiClient } from "@/shared/api/api-client";
import type { Product } from "../types/product.type";

export class ProductService {
    async getAll(): Promise<Product> {
        return apiClient.get("/api/products/get");
    }
};

export const productService = new ProductService();
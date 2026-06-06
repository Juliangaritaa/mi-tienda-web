import { apiClient } from "@/shared/api/api-client";
import type { Categories } from "../types/categories.types";

export class CategoriesService {
    async getAll(): Promise<Categories> {
        return apiClient.get("/api/categories/get");
    }
};

export const categoriesService = new CategoriesService();
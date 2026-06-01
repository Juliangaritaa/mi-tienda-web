import { env } from "@/shared/config/env";

const API_URL = env.apiUrl;

export class ApiClient {
    async post<T>(endpoint: string, body: unknown): Promise<T> {
        const response = await fetch(
            `${API_URL}${endpoint}`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message ?? "Unexpected error");
        }

        return response.json();
    }
}

export const apiClient = new ApiClient();
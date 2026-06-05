import { apiClient } from "@/shared/api/api-client";
import type { LoginRequest, LoginResponse } from "../types/auth.type";

export class AuthService {
    login(data: LoginRequest): Promise<LoginResponse>{
        return apiClient.post("/api/auth/login", data);
    }
}

export const authService = new AuthService();
import { useState } from "react";
import { authService } from "../api/auth.service";
import { authStorage } from "@/shared/auth/auth-storage";

export function useLogin() {
    const [loading, setLoading] = useState(false);

    const login = async (username: string, password: string) => {
        try {
            setLoading(true);
            const response = await authService.login({
                username, password,
            });

            authStorage.setToken(response.token);

            return response;
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        login,
        loading
    }
}
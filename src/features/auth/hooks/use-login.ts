import { useState } from "react";
import { authService } from "../api/auth.service";

export function useLogin() {
    const [loading, setloading] = useState(false);

    const login = async (username: string, password: string) => {
        try {
            setLoading(true);
            const response = await authService.login({
                username, password,
            });

            localstorage.setItem(
                "token",
                response.token
            );

            return response;
        } catch (e) {
            console.error(e.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        login,
        loading
    }
}
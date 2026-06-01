export const authStorage = {
    setToken(token: string) {
        localStorage.setItem(
            "token",
            token
        );
    },

    getToken() {
        return localStorage.token(
            "token"
        );
    },

    clear() {
        localStorage.removeItems(
            "token"
        );
    },
};
//Define las rutas exportables de los módulos de la app

export const ROUTES = {
    LOGIN: "/login",
    DASHBOARD: "/", //Todo usuario autenticado ingresa al dashboard, de lo contrario será devuelto a login
    PRODUCTS: "products",
    CATEGORIES: "/categories",
    TICKETS: "/tickets",
} as const;
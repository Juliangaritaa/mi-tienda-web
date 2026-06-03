import { LayoutDashboard, Package, Tags, Receipt, Users } from "lucide-react";
//Menú lateral
//Centralizamos la navegación
export const menuItems = [
    {
        title:"Dashboard",
        path:"/",
        icon: LayoutDashboard,
    },
    {
        title:"Productos",
        path:"/products",
        icon: Package,
    },
    {
        title:"Categorías",
        path:"/categories",
        icon: Tags,
    },
    {
        title:"Tickets",
        path:"/tickets",
        icon: Receipt,
    },
    {
        title:"Usuarios",
        path:"/users",
        icon: Users,
    },
];
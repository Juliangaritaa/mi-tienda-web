import { LayoutDashboard, Notebook, Package, Tags, SquareCheckBig, Users } from "lucide-react";
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
        icon: Notebook,
    },
    {
        title:"Tareas",
        path:"/task",
        icon: SquareCheckBig,
    },
    {
        title:"Team",
        path:"/users",
        icon: Users,
    },
];
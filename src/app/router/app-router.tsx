import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/features/auth/pages/login-page";
import DashboardPage from "@/features/dashboard/pages/dashboard-page";
import AuthLayout from "@/layouts/auth-layout";
import { ProtectedRoute } from "./protected-route";
import DashboardLayout from "@/layouts/dashboard-layout";
import ProductPage from "@/features/products/pages/product-page";
import CategoriesPage from "@/features/categories/pages/categories-page";
import TaskPage from "@/features/tasks/pages/task-page";

export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
        ],
        
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: (
                    <DashboardLayout />
                ),
                children: [
                    {
                        path: "/",
                        element: (
                            <DashboardPage />
                        ),
                    },
                    {
                        path: "/products",
                        element: (
                            <ProductPage />
                        ),
                    },
                    ,
                    {
                        path: "/categories",
                        element: (
                            <CategoriesPage />
                        ),
                    },
                    {
                        path: "/task",
                        element: (
                            <TaskPage />
                        ),
                    },
                ],
            },
        ],
    },
]);
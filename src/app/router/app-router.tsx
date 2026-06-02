import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
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
                ],
            },
        ],
    },
]);
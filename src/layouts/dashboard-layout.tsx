import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/navigation/components/app-sidebar";
import { AppHeader } from "@/features/navigation/components/app-header";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />

            <div className="flex-1">
                <AppHeader />
                
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    );
}
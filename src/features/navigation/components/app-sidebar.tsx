import { NavLink } from "react-router-dom";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";

import { menuItems } from "../constants/menu-items";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h2 className="font-bold text-lg">
                    App Mi Tienda
                </h2>
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenu>
                    {menuItems.map((item) => {
                        <SidebarMenuItem key={item.path}>
                            <SidebarMenuButton asChild>
                                <NavLink to={item.path}>
                                    <item.icon />
                                    <span>
                                        {item.title}
                                    </span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    })}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}
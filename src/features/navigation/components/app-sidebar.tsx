import { NavLink } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import logo from "@/assets/mi_tienda_web_logo.png";
import { menuItems } from "../constants/menu-items";

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" >
            <SidebarContent>
                <SidebarMenu>

                                <div>
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="AMT"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="text-sm">
                        App Mi Tienda
                    </span>
                </div>
            </div>

                    {menuItems.map((item) => (
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
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}
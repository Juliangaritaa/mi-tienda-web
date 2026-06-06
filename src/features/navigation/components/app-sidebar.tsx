import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import logo from "@/assets/mi_tienda_web_logo.png";
import { menuItems } from "../constants/menu-items";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 flex items-center justify-start px-4">
        <div className="flex items-center overflow-hidden whitespace-nowrap">
          <img
            src={logo}
            alt="AMT"
            className="h-10 w-10 min-w-10 rounded-full object-cover"
          />
          {/* El group-data-[collapsible=icon]:hidden oculta el texto automáticamente al colapsar */}
          <span className="text-sm group-data-[collapsible=icon]:hidden">
            App Mi Tienda
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

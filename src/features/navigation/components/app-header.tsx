import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-background px-4 backdrop-blur-sm md:px-6">
            {/* Lado Izquierdo: Trigger del Sidebar */}
            <div className="flex items-center gap-2">
                <SidebarTrigger variant="outline" />
            </div>

            {/* Lado Derecho: Contenido responsive */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* Oculto en móvil (hidden), visible desde tablets/desktop (md:flex) */}
                <div className="hidden md:flex w-full max-w-sm">
                    <SearchBar />
                </div>
                
                <div className="flex items-center gap-1 md:gap-2">
                    <ThemeToggle />
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}
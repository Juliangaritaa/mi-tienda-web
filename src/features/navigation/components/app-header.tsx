import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
    return (
        <header className="h-16 border-b px-6 items-center flex justify-between" >
            <SidebarTrigger />
            <div className="flex items-center gap-4">
                <SearchBar />
                <ThemeToggle />
                <UserMenu />
            </div>
        </header>
    );
}
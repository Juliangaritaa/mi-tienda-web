import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
    return (
        <header
            className="
            h-16
            border-b
            px-6
            flex
            items-center
            justify-between
            "
        >
            <SidebarTrigger />
            <SearchBar />
            <ThemeToggle />
            <UserMenu />
        </header>
    );
}
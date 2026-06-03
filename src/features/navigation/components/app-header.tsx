import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { SidebarTrigger } from "@/components/ui/sidebar"
import logo from "@/assets/mi_tienda_web_logo.png"

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

            <div>
                <div className="flex items-center gap-3">
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

            <SearchBar />
            <UserMenu />
            
        </header>
    );
}
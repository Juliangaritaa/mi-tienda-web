import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";

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
            <div>
                <h1 className="font-semibold">
                    App Mi Tienda
                </h1>
            </div>
            <SearchBar />
            <UserMenu />
        </header>
    );
}
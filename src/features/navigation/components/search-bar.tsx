import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
    return (
        <div className="relative w-96">
            <Search className="absolute left-3 top-3 h-4 w-4" />
            <Input placeholder="Buscar..." className="pl-9" />
        </div>
    );
}
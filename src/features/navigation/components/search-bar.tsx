import { Input } from "@/components/ui/input";

export function SearchBar() {
    return (
        <div className="relative w-96">
            <Input placeholder="Buscar..." className="pl-2" />
        </div>
    );
}
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Categories } from "../types/categories.type";

interface CategoriesProps {
    categories: Categories;
    // onEdit: void;
    // onDelete: void;
}

export function CategoriesActions({ categories }: CategoriesProps) {

    const handleEdit = () => {
        console.log(categories);
    };

    const handleDelete = () => {
        console.log(categories.id);
    };

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild >
                <Button size="icon" variant="ghost" >
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">

                <DropdownMenuItem onClick={handleEdit}>
                    Editar
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleDelete}>
                    Eliminar
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}

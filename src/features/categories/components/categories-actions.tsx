import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Categories } from "../types/categories.types";
import { Pencil, Trash } from "lucide-react";

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
                <Button size="icon" variant="outline" >
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">

                <DropdownMenuItem onClick={handleEdit}>
                    <Pencil />
                    Editar
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleDelete}>
                    <Trash />
                    Eliminar
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}

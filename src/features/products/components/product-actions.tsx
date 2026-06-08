import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Product } from "../types/product.type";
import { Pencil, Trash } from "lucide-react";

interface ProductsProps {
    product: Product;
    // onEdit: void;
    // onDelete: void;
}

export function ProductActions({ product }: ProductsProps) {

    const handleEdit = () => {
        console.log(product);
    };

    const handleDelete = () => {
        console.log(product.id);
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

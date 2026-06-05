import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Product } from "../types/product.type";

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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Categories } from "../types/categories.type"
import { CategoriesActions } from "../components/categories-actions";

interface CategoriesTableProps {
    categories: Categories[];
    loading: boolean;
    // onEdit(product: Product): void;
    // onDelete(product: Product): void;
}

export default function ProductsTable({categories}: CategoriesTableProps) {

    return (
        <div className="rounded-lg border mt-4">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Creado</TableHead>
                    <TableHead>Acciones</TableHead>
                    <TableHead className="w-[60px]" />
                </TableRow>
                </TableHeader>

                <TableBody>
                {categories.map((c) => (
                    <TableRow key={c.id}>
                    <TableCell>
                        {c.name}
                    </TableCell>

                    <TableCell>
                        {c.created_at}
                    </TableCell>

                    <TableCell>
                        <CategoriesActions
                        c={categories}
                        // onEdit={onEdit}
                        // onDelete={onDelete}
                        />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    );
}
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { ProductWithCategory } from "../types/product.type"
import { ProductActions } from "../components/product-actions";

interface ProductsTableProps {
    products: ProductWithCategory[];
    loading: boolean;
    // onEdit(product: Product): void;
    // onDelete(product: Product): void;
}

export default function ProductsTable({products}: ProductsTableProps) {

    return (
        <div className="rounded-lg border mt-4">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Precio de Compra</TableHead>
                    <TableHead>Precio de Venta</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Creado</TableHead>
                    <TableHead>Acciones</TableHead>
                    <TableHead className="w-[60px]" />
                </TableRow>
                </TableHeader>

                <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                    <TableCell>
                        {product.name}
                    </TableCell>

                    <TableCell>
                        {product.description}
                    </TableCell>

                    <TableCell>
                        ${product.purchase_price}
                    </TableCell>

                    <TableCell>
                        ${product.sale_price}
                    </TableCell>

                    <TableCell>
                        {product.stock}
                    </TableCell>

                    <TableCell>
                        {product.categories.name}
                    </TableCell>

                    <TableCell>
                        {product.created_at}
                    </TableCell>

                    <TableCell>
                        <ProductActions
                        product={product}
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
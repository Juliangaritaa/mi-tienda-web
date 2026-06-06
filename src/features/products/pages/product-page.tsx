import { useProducts } from "../hooks/use-product";
import ProductsHeader from "../components/products-header";
import ProductsTable from "../components/products-table";
import { Separator } from "@/components/ui/separator"

export default function ProductPage() {
    const { products, loading } = useProducts();

    return (
        <div>
            <ProductsHeader />
            <Separator />
            <ProductsTable 
                products={products}
                loading={loading}
            />

        </div>
    );
}
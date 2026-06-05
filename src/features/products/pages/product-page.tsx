import { useProducts } from "../hooks/use-product";
import ProductsHeader from "./products-header";
import ProductsTable from "./products-table";

export default function ProductPage() {
    const { products, loading, getProducts } = useProducts();

    return (
        <div>
            <ProductsHeader />
            <ProductsTable 
                products={products}
                loading={loading}
            />

        </div>
    );
}
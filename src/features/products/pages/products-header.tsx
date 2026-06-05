import { CreateProduct } from "./create-product";

export default function ProductsHeader() {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1>
                Productos
            </h1>
            <CreateProduct />
        </div>
    );
}
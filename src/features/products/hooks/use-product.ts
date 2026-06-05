import { useState, useEffect } from "react";
import { productService } from "../api/product.service";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        try {
            const data = await productService.getAll();
            setProducts(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        loading,
        getProducts
    };
}
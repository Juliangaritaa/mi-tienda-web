import { useState, useEffect } from "react";
import { categoriesService } from "../api/categories.service";

export function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCategories = async () => {
        setLoading(true);
        try {
            const data = await categoriesService.getAll();
            setCategories(data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return {
        categories,
        loading,
        getCategories
    }
}
import { useCategories } from "../hooks/use-categories";
import CategoriesHeader from "../components/categories-header";
import CategoriesTable from "../components/categories-table";
import { Separator } from "@/components/ui/separator"

export default function CategoriesPage() {
    const { categories, loading } = useCategories();

    return (
        <div>
            <CategoriesHeader />
            <Separator />
            {/* <CategoriesTable 
                categories={categories}
                loading={loading}
            /> */}
            <CategoriesTable 
            categories={categories}
            loading={loading}
            />
        </div>
    );
}
import { CreateCategories } from "./create-categories";

export default function CategoriesHeader() {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1>
                Categorías
            </h1>
            <CreateCategories />
        </div>
    );
}
export interface Product {
    id: string;
    name: string;
    description: string;
    stock: number;
    category_id: string;
    purchase_price: number;
    sale_price: number;
    is_active: boolean;
    created_at: string;
}
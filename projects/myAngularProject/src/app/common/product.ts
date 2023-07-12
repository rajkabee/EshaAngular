import { Category } from "./category";

export class Product {
    id:number;
    sku: string;
    name: string;
    description: string;
    unit_price: number;
    image_url:string;
    active:boolean;
    units_in_stock: number;
    category:Category;

    
}


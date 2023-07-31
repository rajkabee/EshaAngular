import { CartItem } from "../entities/cart-item";
import { Product } from "../entities/product";
import { Address } from "./address";

export class Order {
    billingAddress: Address;
    shippingAddress: Address;
    cartItems:CartItem[];
    subtotal: number;
    shipping: number;
    total: number;
    modeOfPayment: string;
}

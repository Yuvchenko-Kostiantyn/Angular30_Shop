import { ProductModel } from "./product.model";

export interface ICartItem extends ProductModel {
    quantity: number;
}
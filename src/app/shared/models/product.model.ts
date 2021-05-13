import { Categories } from './categories';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
}

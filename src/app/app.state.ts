import {Product} from '../app/product/product.model';

export interface AppState {
    readonly product: Product[];
}
import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private stock!: Product[];

  constructor() { }


  getStock(): Product[]{
    return this.stock;
  }

  cantidadProducts(product : Product[]) : number{
    return product.length;
  }

  // totalCarrito(product : Product[]) : number {
  //   return product
  // }
}
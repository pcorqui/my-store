import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  //declarando un objeto reactivo
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable();

  private stock!: Product[];

  constructor() { }


  getStock(): Product[]{
    return this.stock = [];
  }

  cantidadProducts(product : Product[]) : number{
    return product.length;
  }

  addProducts(producto: Product): void{
    //El observable emitira un nuevo valor con cada producto que se agregue al carrito
    this.stock.push(producto);
    this.myCart.next(this.stock);
  }

  // totalCarrito(product : Product[]) : number {
  //   return product
  // }
}
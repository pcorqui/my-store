import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  //declarando un objeto reactivo
  private myCart = new BehaviorSubject<Product[]>([]);

  //este objeto sera al que se deben suscribir para recibir actualizaciones los componentes
  //cree dos uno en producto component y otro en navcomponent
  //pero al ser injeccion de dependencias solo se crea un objeto de esta clase
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

}
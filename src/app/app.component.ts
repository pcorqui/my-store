import { Component, OnInit } from '@angular/core';
import { Product, ProductApi } from './components/models/product.model';
import { StoreService } from './services/store.service';
import { ProductServiceService } from './services/product-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cantidadProductos: number = 0;
  totalCarrito: number = 0;

  constructor(
    private stockService: StoreService,
    private productService: ProductServiceService){

  }

  imgParent = '';
  productsapi: ProductApi[] = [];
  products: Product[] = [
      {
        id: '1',
        name: 'El mejor juguete',
        price: 565,
        image: './assets/images/juguete.jpg',
      },
      {
        id: '2',
        name: 'Collecion de albumnes',
        price: 34,
        image: './assets/images/albunes.jpg'
      },
      {
        id: '3',
        name: 'Mis libros',
        price: 23,
        image: './assets/images/books.jpg'
      },
      {
        id: '4',
        name: 'Casa para perro',
        price: 34,
        image: './assets/images/house.jpg'
      },
      {
        id: '5',
        name: 'Gafas',
        price: 3434,
        image: './assets/images/glasses.jpg'
      }

  ];

  nuevosProductos = this.stockService.getStock();

  ngOnInit(): void{
    this.stockService.myCart$
    .subscribe(data => {
      // Cada vez que el observable emita un valor, se ejecutará este código
      console.log(data);
      console.log('algo emite');
    });

    this.productService.getAllProduct().subscribe(
      data => { console.log( data)}
     );
  }

  onLoaded(img: string){
    console.log('padre', img);
    this.imgParent = img;
  }

  addedProductPadre(product : Product){
    //aqui deberia haber un objeto products manipulado por service
    console.log(product);
    console.log("se sigue emitiendo");
    this.nuevosProductos.push(product);
    this.cantidadProductos = this.stockService.cantidadProducts(this.products);
    this.totalCarrito += product.price;
  }

  AddObservable(product : Product){
    console.log("observable" + product);
    this.nuevosProductos.push(product);
  }

  public callApi(){
     this.productService.getAllProduct().subscribe(
      data => { this.productsapi = data}
     );

  }
}

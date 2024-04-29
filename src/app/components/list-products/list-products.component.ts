import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { StoreService } from 'src/app/services/store.service';
import { Product, ProductApi, ProductDTO, ProductDTOUpdate } from '../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public showProductDetails = false;

  cantidadProductos: number = 0;
  totalCarrito: number = 0;

  constructor(
    private stockService: StoreService,
    private productService: ProductServiceService){

  }

  imgParent = '';
  productChosen: Product = {
    id: "",
    name: "",
    price: 0.0,
    image: "",
    title: "",
    descripcion: ""

  }
  productsapi: ProductApi[] = [];
  products: Product[] = [];
      // {
      //   id: '1',
      //   name: 'El mejor juguete',
      //   price: 565,
      //   image: './assets/images/juguete.jpg',
      // },
      // {
      //   id: '2',
      //   name: 'Collecion de albumnes',
      //   price: 34,
      //   image: './assets/images/albunes.jpg'
      // },
      // {
      //   id: '3',
      //   name: 'Mis libros',
      //   price: 23,
      //   image: './assets/images/books.jpg'
      // },
      // {
      //   id: '4',
      //   name: 'Casa para perro',
      //   price: 34,
      //   image: './assets/images/house.jpg'
      // },
      // {
      //   id: '5',
      //   name: 'Gafas',
      //   price: 3434,
      //   image: './assets/images/glasses.jpg'
      // }
  //];

  nuevosProductos = this.stockService.getStock();

  ngOnInit(){
    this.productsapi = [];
    this.productService.getProductsByPage(10,5).subscribe(
      data => { this.products = data;
                console.log('la data' + data)}
     );

    // this.stockService.myCart$
    // .subscribe(data => {
    //   // Cada vez que el observable emita un valor, se ejecutará este código
    //   console.log(data);
    //   console.log('algo emite');
    // });
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

  toggleProductDetails(){
    this.showProductDetails = !this.showProductDetails;
  }

  onShowProductDetails(id: string){

    console.log('el producto: ' + id);
    this.productService.getProductInfo(id).subscribe(
      data => {console.log(data);
      this.toggleProductDetails();
      this.productChosen = data;}
    );
  }

  createNewProduct(){
    const productDTO : ProductDTO = {
      title: "nuevo Producto",
      descripcion: "",
      image: "",
      price: 0.0,
      name: "",
      categoryId: 0
    }

    this.productService.create(productDTO)
    .subscribe(
      data => {console.log(data)}
    )
  }

    updateProduct(){
        const changes: ProductDTOUpdate = {
          title: 'change title',
        }

        const id = this.productChosen.id;
        this.productService.update(id,changes).subscribe(
          data => {console.log('update', data)}
        )
      }

      deleteProduct(){
        const id = this.productChosen.id;
        console.log("product_choosen: " + id)
        this.productService.delete(id).subscribe(
          data => {
            console.log("elemento: "+this.products.findIndex(index => index.id == id));
            //quitamos el producto de products para no rehacer otra peticion al server.
            this.products.splice(this.products.findIndex(product => product.id == id),1);
            this.showProductDetails = false;
          }
        );
      }
}

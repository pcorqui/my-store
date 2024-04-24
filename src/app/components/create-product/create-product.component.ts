import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  confirmed: boolean = false;

   product: Product = {
    id: "",
    name: "producto",
    price: 0.0,
    image: "",
    title: "",
    descripcion: "",
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  createProduct(){
    this.product.name = "perro"
    console.log(this.product.name);
  }

}

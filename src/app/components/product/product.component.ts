import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  public addCar(){
    console.log("objeto agregado");
    this.addedProduct.emit(this.product);
  }

}

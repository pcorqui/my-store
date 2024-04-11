import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { StoreService } from '../../services/store.service';

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

  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
  }

  public addCar(){
    console.log("objeto agregado");
    //this.addedProduct.emit(this.product);
    this.storeService.addProducts(this.product);
  }

}

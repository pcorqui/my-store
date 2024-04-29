import { Component, OnInit } from '@angular/core';
import { Product, ProductApi, ProductDTO, ProductDTOUpdate } from './components/models/product.model';
import { StoreService } from './services/store.service';
import { ProductServiceService } from './services/product-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor()
  {}

  ngOnInit(){
  }
}

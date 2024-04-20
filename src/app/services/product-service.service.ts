import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product, ProductApi } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct(){
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }

  getProductInfo(id : string){
    return this.http.get<Product>("https://fakestoreapi.com/products/"+id);
  }
}

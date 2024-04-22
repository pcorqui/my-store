import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product, ProductApi, ProductDTO } from '../components/models/product.model';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private api : string = "https://fakestoreapi.com/products"

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct(){
    return this.http.get<Product[]>(this.api);
  }

  getProductInfo(id : string){
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  create(data: ProductDTO){
    return this.http.post<Product>(this.api, data);
  }

  update(id:string, dto: any){
    return this.http.patch<Product>(`${this.api}/${id}`,dto);
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.api}/${id}`);
  }

  //paginacion
  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.api}`,{
      params: {limit, offset}
    })
  }
}

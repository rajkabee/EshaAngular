import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string="http://localhost:8080/api/products";
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<GetResponse>(this.baseUrl);
  }
}

interface GetResponse {
  _embedded: {
  products: Product[];
  }
}

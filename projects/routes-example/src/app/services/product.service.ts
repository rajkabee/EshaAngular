import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  rootUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  public getProduct(){
    return "Electronic Piano";
    //return null;
  }
  public getProducts(){
    return this.http.get(this.rootUrl+'/products');
  }
}

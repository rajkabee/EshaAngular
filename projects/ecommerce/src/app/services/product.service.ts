import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl:string="http://localhost:8080/api/products";
  constructor(private httpClient: HttpClient) { }
 //http://localhost:8080/api/products/search/findByCategoryId?id=4&page=2&size=10
  getProducts(){
    return this.httpClient.get<GetResponseProducts>(this.baseurl).pipe(
      map(response => response._embedded.products)
    );
  }
  getProductByCategory(categoryId:number, page:number=0, size:number=20){
    
    return this.httpClient.get<GetResponseProducts>(this.baseurl
      +"/search/findByCategoryId?id="+categoryId
      +"&page="+page
      +"&size="+size)
    .pipe(
      map(response => response._embedded.products)
    );
  }
  getProductListPaginate(
    theCategoryId: number,
    thePage: number, 
    thePageSize: number 
   ): Observable<GetResponseProducts> {

    // need to build URL based on category id, page and size 
    const searchUrl = `${this.baseurl}/search/findByCategoryId?id=${theCategoryId}`
    + `&page=${thePage}&size=${thePageSize}`;

    console.log(`Getting products from - ${searchUrl}`);

    return this.httpClient.get<GetResponseProducts>(searchUrl);
}

 
 



}
interface GetResponseProducts {
  _embedded: {
  products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }

} 

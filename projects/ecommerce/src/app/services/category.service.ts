import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Category } from '../entities/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string = "http://localhost:8080/api/categories";
  constructor(private http: HttpClient) { }


  getCategories(){
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response=>response._embedded.categories)
    );
  }
}
interface GetResponse{
  _embedded:{
    categories: Category[]
  }
}
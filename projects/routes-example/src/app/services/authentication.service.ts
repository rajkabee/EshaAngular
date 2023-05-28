import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  rootUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  public  authenticate(){
    return this.http.get(this.rootUrl+'/authenticate');
  }
}

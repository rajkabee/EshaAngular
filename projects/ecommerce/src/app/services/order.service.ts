import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/order';
import { Address } from '../common/address';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  basePath: "http://localhost:8080/api/orders";
  msg:string;
  constructor(private httpClient: HttpClient) { }

  createOrder(order:Order):string{
    order = new Order();
    order.shippingAddress=new Address();
    order.billingAddress=new Address();
    order.subtotal=1231321;
   this.httpClient
   .post<string>(this.basePath, order);
   console.log(order);
   return this.msg;
  }
}

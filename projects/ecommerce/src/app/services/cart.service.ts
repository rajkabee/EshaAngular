import { Injectable } from '@angular/core';
import { CartItem } from '../entities/cart-item';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService{
  items :CartItem[]=[];
  observableItems = of(this.items);
  totalNoOfItems: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  itemAlreadyExists=false;
  constructor() { }

  addToCart(item : CartItem){

    if(this.items.length==0){
      this.items.push(item);
    }
    else{
      this.itemAlreadyExists=false;
      if(this.items.find(tempCartItem=>tempCartItem.id==item.id)){
        this.itemAlreadyExists=true;
        for(let itm of this.items){
          if(itm.id==item.id){
            itm.quantity++;
          }
        }
      }
      else{
        this.items.push(item);
      }
    }
    //console.log(this.items);
    this.evaluateTotals();
  }


  evaluateTotals(){
    let tPrice=0;
    let tItems=0;
    for(let item of this.items){
      tPrice+=item.unitPrice*item.quantity;
      tItems+=item.quantity;
    }
    this.totalPrice.next(tPrice);
    this.totalNoOfItems.next(tItems);
  }


}

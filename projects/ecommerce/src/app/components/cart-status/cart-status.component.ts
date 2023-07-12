import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/entities/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent  implements OnInit{
  totalNoOfItems:number=0;
  totalPrice:number=0;
  items:CartItem[];
  constructor(private cartService: CartService){

  }

  ngOnInit(): void {
      this.listCartDetails();
  }

  listCartDetails(){
    this.cartService.totalNoOfItems.subscribe(
      data=>{
        this.totalNoOfItems=data;
      }
    );
    this.cartService.totalPrice.subscribe(
      data=>{
        this.totalPrice=data;
      }
    );
    this.cartService.observableItems.subscribe(
      data=>this.items=data
    );
  }
}
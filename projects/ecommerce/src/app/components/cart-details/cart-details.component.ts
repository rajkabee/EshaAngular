import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit{
  totalNoOfItems:number=0;
  totalPrice:number=0;

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
  }
}

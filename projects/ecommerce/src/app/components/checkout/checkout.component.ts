import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/common/address';
import { Order } from 'src/app/common/order';
import { CartItem } from 'src/app/entities/cart-item';
import { Product } from 'src/app/entities/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  order : Order;
  orderFormGroup=new FormGroup({
    billingAddress:new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName:new FormControl(''),
      email:new FormControl(''),
      mobileNo:new FormControl(''),
      addressLine1:new FormControl(''),
      addressLine2:new FormControl(''),
      country:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zipCode:new FormControl('')
    }),
    shippingAddress:new FormGroup({
      firstName: new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      mobileNo:new FormControl(''),
      addressLine1:new FormControl(''),
      addressLine2:new FormControl(''),
      country:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zipCode:new FormControl('')
    }),
  });
  items:CartItem[];
  totalPrice:number;

  constructor(private cartService : CartService, private orderService : OrderService){

  }
  ngOnInit(): void {
      this.cartService.observableItems.subscribe(data=>this.items = data);
      this.cartService.totalPrice.subscribe(price=>this.totalPrice=price);
  }

  processForm(){
    console.log(this.orderFormGroup.value);
    this.order = new Order();
    this.order.billingAddress=this.orderFormGroup.value.billingAddress as Address;
    this.order.shippingAddress=this.orderFormGroup.value.shippingAddress as Address;
    this.order.cartItems=this.items;
    this.order.subtotal=this.totalPrice;
    let msg = this.orderService.createOrder(this.order);
    console.log(msg);
  }
}

import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  msg="";
  constructor(private paymentService: PaymentService){}
  initiatePayment(){
   this.msg = this.paymentService.pay();
  }
}

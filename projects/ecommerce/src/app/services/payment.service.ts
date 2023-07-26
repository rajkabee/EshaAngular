import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare let KhaltiCheckout:any;
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  msg:string="msg";
  url = "https://a.khalti.com/api/v2//epayment/initiate/";
  testKey = "key test_secret_key_fe57feb417084638be4b2a5e5cea6f37";
  config = {
    // replace the publicKey with yours
    "publicKey": "test_public_key_3b144287ee934cc6a57113ec0ddce926",
    "productIdentity": "1234567890",
    "productName": "Dragon",
    "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
    "paymentPreference": [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
        ],
        "eventHandler": {
          onSuccess (payload:any) {
              // hit merchant api for initiating verfication
              console.log(payload);
          },
          onError (error:any) {
              console.log(error);
          },
          onClose () {
              console.log('widget is closing');
          }
      }
    
};
    

  constructor(private httpClient: HttpClient) { 
    
  }
  pay(){
    // const headers = { 'Authorization': this.testKey };
    // this.httpClient.post<any>(this.url, this.payload, { headers }).subscribe(data=>{
    //   this.msg = data;
    //   console.log(data);
    // });

    var checkout = new KhaltiCheckout(this.config);
    checkout.show({amount: 1000});
    return "done";
  }
}

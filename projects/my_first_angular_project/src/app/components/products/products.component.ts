import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products:any;
    constructor(private productService: ProductService){
    }
    
    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(){
      return this.productService.getProducts().subscribe((products)=>{
        this.products=products;
      });
    }

}

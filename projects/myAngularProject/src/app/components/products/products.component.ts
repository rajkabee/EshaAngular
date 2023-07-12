import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  constructor(private productService: ProductService){

  }


  ngOnInit(): void {
      this.productService.getProducts().subscribe(
        data=>this.products=data._embedded.products
      );
  }
}

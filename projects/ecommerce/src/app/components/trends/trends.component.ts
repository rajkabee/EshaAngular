import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/entities/cart-item';
import { Product } from 'src/app/entities/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit{
  products:Product[];
  currentCategoryId:number=1;
  previousCategoryId:number=1;
  page:number=1;
  size:number=8;
  theTotalElements: number = 0;
  noOfPages:number=0;
  pages:number[]=[];
  constructor(private productService: ProductService, 
              private route: ActivatedRoute,
              private cartService: CartService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProducts();
    });

  }



  getProducts(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = Number(this.route.snapshot.paramMap.get('id'));
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    //
    // Check if we have a different category than previous
    // Note: Angular will reuse a component if it is currently being viewed
    //

    // if we have a different category id than previous
    // then set thePageNumber back to 1
    // if (this.previousCategoryId != this.currentCategoryId) {
    //   this.thePageNumber = 1;
    // }

    this.previousCategoryId = this.currentCategoryId;
    this.productService.getProductListPaginate(this.currentCategoryId, this.page, this.size).subscribe(
      
       
        this.processResult()
       
      
    );

  }
  
  processResult() {
    return (data:any) => {
      this.products = data._embedded.products;
      this.page = data.page.number + 1;
      this.size = data.page.size;
      this.theTotalElements = data.page.totalElements;
      this.noOfPages = Math.ceil(this.theTotalElements/this.size);
      this.pages=[];
      for(let i =0; i<this.noOfPages; i++){
        this.pages.push(i);
      }

    };
  }

  updatePageNo(newPage:number){
    this.page=newPage;
    this.getProducts();
  }
  updatePageSize(event:Event) {
    let pageSize:number=(event.target as HTMLTextAreaElement).value as unknown as number;
    this.size = pageSize;
    this.page = 0;
    this.getProducts();
  }

  addToCart(product:Product){
    let item = new CartItem(product.id, product.name, product.image_url, product.unit_price);
    this.cartService.addToCart(item);
    
  }


}


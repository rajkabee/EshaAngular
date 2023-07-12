import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  categories:Category[];
  constructor(private categoryService: CategoryService, 
      private productService: ProductService){}

  ngOnInit(): void {
      this.getCategories();
  }

  getCategories(){
   this.categoryService.getCategories().subscribe(
      data=>this.categories = data
    );
  }
  

}

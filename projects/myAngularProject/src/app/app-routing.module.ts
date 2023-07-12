import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  {path: "" , component: ProductsComponent},
  {path: "home" , component: ProductsComponent},
  {path: "contact" , component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
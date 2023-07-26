import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrendsComponent } from './components/trends/trends.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'home', component: TrendsComponent },
  {path: 'category/:id', component: TrendsComponent},
  {path: 'cartDetails', component: CartDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

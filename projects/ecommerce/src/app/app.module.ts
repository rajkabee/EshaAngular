import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OffersComponent } from './components/offers/offers.component';
import { TrendsComponent } from './components/trends/trends.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    HeaderComponent,
     NavbarComponent,
     FeaturesComponent,
     CategoriesComponent,
     OffersComponent,
     TrendsComponent,
     SubscribeComponent,
     NewArrivalComponent,
     VendorsComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

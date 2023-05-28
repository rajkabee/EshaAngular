import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimeComponent } from './components/anime/anime.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { Consumer1Component } from './components/consumer1/consumer1.component';
import { Consumer2Component } from './components/consumer2/consumer2.component';
import { CoursesService } from './services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { PostComponent } from './components/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AnimeComponent,
    AttributeDirectivesComponent,
    CustomDirectiveDirective,
    PipesExampleComponent,
    CustomPipePipe,
    Consumer1Component,
    Consumer2Component,
    ProductsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule, 
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ CoursesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

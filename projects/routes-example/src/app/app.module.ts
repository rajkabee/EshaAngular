import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { NewblogsComponent } from './components/newblogs/newblogs.component';
import { OtherblogsComponent } from './components/otherblogs/otherblogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ErrorComponent,
    CoursesComponent,
    CourseDetailsComponent,
    NewblogsComponent,
    OtherblogsComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

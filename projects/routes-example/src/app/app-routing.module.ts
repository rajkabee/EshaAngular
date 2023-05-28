import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { OtherblogsComponent } from './components/otherblogs/otherblogs.component';
import { NewblogsComponent } from './components/newblogs/newblogs.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  { path: 'blog',
    component:BlogComponent,
    children:[
      {path:'newblogs', component: NewblogsComponent},
      {path:'', component: NewblogsComponent},
      {path:'otherblogs', component: OtherblogsComponent},
    ]
  },
  {path: 'about', component:AboutComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'courses/:id', component:CourseDetailsComponent},
  {path: 'home', redirectTo:"", pathMatch:"full"},
  {path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

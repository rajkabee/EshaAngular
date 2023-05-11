import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCourses(){
    return [
      {
        "name": "Angular Development",
        "category": "Frontend Development",
        "price": "25000"
      },
      {
        "name": "Angular Development",
        "category": "Frontend Development",
        "price": "25000"
      },
      {
        "name": "Java Fullstack Development",
        "category": "Fullstack Development",
        "price": "35000"
      },
      {
        "name": "Php with Laravel Framework",
        "category": "Fullstack Development",
        "price": "25000"
      },
      {
        "name": "Flutter Development",
        "category": "Mobile Development",
        "price": "25000"
      }
    ];
  }
}

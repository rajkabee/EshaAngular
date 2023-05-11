import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.css']
})
export class Consumer1Component {
  public courses:any[]=[];
  constructor(_courseService:CoursesService){
    this.courses = _courseService.getCourses();
    this.courses.push({
      "name": "HTML, CSS, JS, Bootstrap, JQ",
      "category": "frontend Design",
      "price": "20000"
    });
  }
}

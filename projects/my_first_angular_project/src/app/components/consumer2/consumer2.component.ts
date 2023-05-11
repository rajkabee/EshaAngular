import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.css']
})
export class Consumer2Component {
  public courses:any[]=[];
  constructor(_courseService:CoursesService){
    this.courses = _courseService.getCourses();
  }
}

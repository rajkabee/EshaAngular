import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public courseID:number=0;
constructor(private route:ActivatedRoute, private router: Router){}

ngOnInit(): void {
    this.courseID = this.route.snapshot.paramMap.get('id') as unknown as number;
}
goBack(){
  let selectedId = this.courseID?this.courseID:null;
  this.router.navigate(['/courses',{id:this.courseID}]);
}
}

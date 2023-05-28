import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedId:number=0;
  courses=[
    {
      id: 1,
      name: "java"
    },
    {
      id: 2,
      name: "Angular"
    },
    {
      id: 3,
      name: "React"
    },
    {
      id: 4,
      name: "Python"
    },
    {
      id: 5,
      name: ".NET"
    },
  ];
  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params:ParamMap)=>{
          let id= params.get("id") as unknown as number;
          this.selectedId =id;
      })
  }

  onClick(course:any){
    this.router.navigate(["/courses/",course.id]);
  }

  isSelected(course:any){
    return course.id==this.selectedId;
  }

}

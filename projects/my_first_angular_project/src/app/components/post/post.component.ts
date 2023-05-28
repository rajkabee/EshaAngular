import { Component, OnInit } from '@angular/core';
import { filter, find, map, take } from 'rxjs';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts:Post[]=[];
  constructor(private postService: PostService){}

  ngOnInit(): void {
   this.postService.getPosts().subscribe(data=>{
    this.posts=data;
   });


  //     console.log(this.postService.getPosts().pipe(filter(val=>val<50),take(5)).subscribe({
  //       next:(val)=>console.log(val),
  //       complete: ()=>console.log("All data received!"),
  //       error:(val)=>console.log("404: not found!")
  // }));
  //     console.log(this.postService.getPosts().pipe(find(val=>val===30)).subscribe({
  //       next:(val)=>console.log(val),
  //       complete: ()=>console.log("All data received!"),
  //       error:(val)=>console.log("404: not found!")
  // }));
  //     console.log(this.postService.getPosts().pipe(map(val=>val+"asdsd")).subscribe({
  //       next:(val)=>console.log(val),
  //       complete: ()=>console.log("All data received!"),
  //       error:(val)=>console.log("404: not found!")
  // }));
  }
}

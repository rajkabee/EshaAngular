import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/classes/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[];
  constructor(private postsService:PostsService){}

  ngOnInit(): void {
      this.getPosts();
  }

  getPosts(){
     this.postsService.getPosts().subscribe(data=>{
      this.posts=data;
     });
    // console.log(this.postsService.getPosts());
     
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = "https://jsonplaceholder.typicode.com/posts";
  posts:any[]=[];
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    console.log(this.http.get(this.baseUrl));
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.posts)
    );
  }
}
interface GetResponse {
  _embedded: {
  posts: Post[];
  }
  }

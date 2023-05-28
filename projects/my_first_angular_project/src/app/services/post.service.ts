import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, interval, merge, of, throwError } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 3000);
    // throw(()=>{
    //   throwError("Error Occured");
    // });
  });
  constructor(private http:HttpClient) { }

  getPosts(){
   // return this.observable;
   //return  of([10,20,30,40,50]);
   //return  from([10,20,30,40,50]);
   //return interval(1000);
   //return merge(from([10,65,78,45,11,23,56,76,22,34,20,30,40,50]),from(['a','b','c','d','e']));
   //return from([10,65,78,45,11,23,56,76,22,34,20,30,40,50]);
   //let url='https://jsonplaceholder.typicode.com/posts';
   let url='assets/data/posts.json';
   return this.http.get<Post[]>(url);
  }
}

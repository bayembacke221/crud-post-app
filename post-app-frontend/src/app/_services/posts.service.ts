import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../_be/posts";

const apiUrl = 'http://localhost:3000/api/posts/';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private  http : HttpClient) { }

  addPost(post:Posts):Observable<Posts>{
    return this.http.post<Posts>(apiUrl,post);
  }
  getAllPosts():Observable<Posts[]>{
    return this.http.get<Posts[]>(apiUrl);
  }
  updatePost(post:Posts):Observable<Posts>{

    return this.http.put<Posts>(apiUrl+post.id,post);
  }
  getPostById(id:number):Observable<Posts>{
    return this.http.get<Posts>(apiUrl+id);
  }
  deletePost(id:number):Observable<Posts>{
    return this.http.delete<Posts>(apiUrl+id);
  }
}

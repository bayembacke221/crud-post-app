import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../_services/posts.service";
import {Posts} from "../../../_be/posts";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-main-posts',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-posts.component.html',
  styleUrl: './main-posts.component.css'
})
export class MainPostsComponent implements OnInit{

  postsList:Posts[] = [];
  ngOnInit(): void {
    this.getAllPosts();
  }

  constructor(private post:PostsService) {
  }

  getAllPosts(){
    this.post.getAllPosts().subscribe((data)=>{
      this.postsList = data;
    })
  }

}

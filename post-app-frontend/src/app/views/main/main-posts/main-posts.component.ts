import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../_services/posts.service";
import {Posts} from "../../../_be/posts";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-main-posts',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgxPaginationModule
  ],
  templateUrl: './main-posts.component.html',
  styleUrl: './main-posts.component.css'
})
export class MainPostsComponent {

  pageSize=5;
  currentPage=1;
  postsList:Posts[] = [];
  deletedPost:Posts;
  showModal=false;
  ngOnInit(): void {
    this.getAllPosts();
  }

  constructor(private post:PostsService, private router : Router,) {
  }

  getAllPosts(){
    this.post.getAllPosts().subscribe((data)=>{
      this.postsList = data;
    })
  }

  toggleModal(post:Posts){
    this.deletedPost = post;
    this.showModal = !this.showModal;
  }

  deletePost(id:number){
    this.post.deletePost(id).subscribe((data)=>{
      this.redirectTo()
    })
  }


  redirectTo(){
    this.showModal = !this.showModal;
    this.getAllPosts();
    this.router.navigateByUrl('/posts').then(() => {
      window.location.reload();
    });
  }
}

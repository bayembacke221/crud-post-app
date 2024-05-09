import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../../_services/posts.service";
import {Posts} from "../../../_be/posts";

@Component({
  selector: 'app-main-show-post',
  standalone: true,
  imports: [],
  templateUrl: './main-show-post.component.html',
  styleUrl: './main-show-post.component.css'
})
export class MainShowPostComponent {
  private route = inject(ActivatedRoute);
  postId!: number;
  post:Posts;

  constructor( private postService: PostsService){
  }

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost();
  }

  getPost() {
    this.postService.getPostById(this.postId).subscribe((data: Posts) => {
      this.post = data;
    });
  }
}

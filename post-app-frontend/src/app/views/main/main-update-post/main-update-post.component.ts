import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Posts} from "../../../_be/posts";
import {PostsService} from "../../../_services/posts.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-update-post',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './main-update-post.component.html',
  styleUrl: './main-update-post.component.css'
})
export class MainUpdatePostComponent {
  private route = inject(ActivatedRoute);
  postId!: number;
  post:Posts;
  generalData: any = {title: '', slug: '', body: '',thumbnail: ''};
  constructor( private postService: PostsService, private router : Router, private toastr: ToastrService) {
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


  updatePost(post: Posts) {
    post.id = this.postId;
    post.isPublished = false;
    console.log(post)

    this.postService.updatePost(post).subscribe(
      response => {
        console.log(response);
        this.showsuccess()
        this.redirectTo('/posts');
      },
      error => {
        console.log(error);
      }
    )
  }

  showsuccess() {
    this.toastr.success('Post updated successfully', 'Success');
    this.generalData = {};
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }
}

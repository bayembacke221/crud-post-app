import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {Posts} from "../../../_be/posts";
import {PostsService} from "../../../_services/posts.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-create-post',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './main-create-post.component.html',
  styleUrl: './main-create-post.component.css'
})
export class MainCreatePostComponent {
  generalData: any = {title: '', slug: '', body: '',thumbnail: ''};


  constructor(private postService: PostsService,private toastr: ToastrService) {
  }

  /**
   *  Create Post */
  createPost() {

    const post: Posts = {
      id: 0,
      title: this.generalData.title,
      slug: this.generalData.slug,
      body: this.generalData.body,
      thumbnails: this.generalData.thumbnail,
      isPublished: false,
      createdAt: new Date(),
    };
    this.postService.addPost(post).subscribe(
      response => {
        console.log(response);
        this.resetForm();

      },
      error => {
        console.log(error);
      }
    )
  }


  resetForm() {
    this.generalData.title = '';
    this.generalData.slug = '';
    this.generalData.body = '';
    this.generalData.thumbnail = '';

  }


}
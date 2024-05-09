import { Routes } from '@angular/router';
import {MainComponent} from "./layouts/main/main.component";

export const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./views/main/main-posts/main-posts.component').then(m => m.MainPostsComponent),
      },
      {
        path: 'posts',
        loadComponent: () => import('./views/main/main-posts/main-posts.component').then(m => m.MainPostsComponent),
      },
      {
        path: 'post/create',
        loadComponent: () => import('./views/main/main-create-post/main-create-post.component').then(m => m.MainCreatePostComponent),
      },
      {
        path: 'post/show/:id',
        loadComponent: () => import('./views/main/main-show-post/main-show-post.component').then(m => m.MainShowPostComponent),
      },
      {
        path: 'post/edit/:id',
        loadComponent: () => import('./views/main/main-update-post/main-update-post.component').then(m => m.MainUpdatePostComponent),
      }
    ]
  },


];

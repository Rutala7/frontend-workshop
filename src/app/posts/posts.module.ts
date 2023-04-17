import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';


@NgModule({
  declarations: [PostsComponent, FilterPostsComponent, DetailedPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }

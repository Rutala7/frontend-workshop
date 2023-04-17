import { ValidationService } from './../services/validation.service';
import { PostsService } from './../services/posts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostRoutingModule } from './new-post-routing.module';
import { NewPostComponent } from './new-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    NewPostComponent
  ],
  providers: [PostsService, ValidationService],
  imports: [
    CommonModule,
    NewPostRoutingModule, ReactiveFormsModule
  ]
})
export class NewPostModule { }

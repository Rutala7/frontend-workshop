import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { AvailablePostGuard } from '../guards/available-post.guard';

const routes: Routes = [
  { path: '', component: PostsComponent },
{ path: ':id', component: DetailedPostComponent, canActivate: [AvailablePostGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

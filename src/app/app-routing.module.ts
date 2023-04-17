import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/posts'},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'new-post', loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostModule) },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

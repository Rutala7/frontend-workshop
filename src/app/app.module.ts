import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewPostModule } from './new-post/new-post.module';
import { PostsModule } from './posts/posts.module';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainMenuComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

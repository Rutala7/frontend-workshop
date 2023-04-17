import { map, Observable, of } from 'rxjs';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> = of([]);

  constructor(private postsService: PostsService) {}
  
  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  filterPosts(filter: string) {
    this.posts$ = this.postsService.getPosts()
      .pipe(
        map((posts) => posts.filter((post) => post.title.includes(filter))),
      );
  }
}

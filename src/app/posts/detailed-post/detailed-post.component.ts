import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss']
})
export class DetailedPostComponent implements OnInit {

  detailedPost$: Observable<Post>;
  constructor(private postsService: PostsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailedPost$ = this.postsService.getSinglePost(id || '');
  }
}

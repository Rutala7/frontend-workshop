import { PostsService } from './../services/posts.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailablePostGuard implements CanActivate {

  constructor(private postservice: PostsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {

      const id = route.paramMap.get('id');

      if(id === null) {
        this.router.createUrlTree(['/posts']);
      }
    return this.postservice.getSinglePost(id || '').pipe(map(() => true),
    catchError(async () => this.router.createUrlTree(['/posts'])),
    );
  } 
}

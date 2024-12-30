import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import * as PostActions from './actions';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(
    () => {
      console.log('ACTION: ', this.actions$);
      return this.actions$.pipe(
        ofType(PostActions.getPosts),
        mergeMap(() => {
          return this.postsService.getPosts().pipe(
            map((posts) => PostActions.getPostsSuccess({ posts })),
            catchError((error) =>
              of(PostActions.getPostsFailure({ error: error.message }))
            )
          );
        })
      );
    }
    //     this.actions$.pipe(
    //       ofType(PostActions.getPosts),
    //       mergeMap(() => {
    //         return this.postsService.getPosts().pipe(
    //           map((posts) => PostActions.getPostsSuccess({ posts })),
    //           catchError((error) =>
    //             of(PostActions.getPostsFailure({ error: error.message }))
    //           )
    //         );
    //       })
    //     )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}

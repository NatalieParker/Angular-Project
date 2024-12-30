import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostActions from '../../store/actions';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  standalone: false,
})
export class PostsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('IN POST');
    this.store.dispatch(PostActions.getPosts());
  }
}

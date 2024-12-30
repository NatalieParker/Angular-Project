import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostsComponent],
  providers: [PostsService],
  imports: [CommonModule, StoreModule.forFeature('posts', reducers)],
  exports: [PostsComponent],
})
export class PostsModule {}

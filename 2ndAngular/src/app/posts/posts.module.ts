import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PostsService } from './services/posts.service';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects';

@NgModule({
  declarations: [PostsComponent],
  providers: [PostsService],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostEffects]),
  ],
  exports: [PostsComponent],
})
export class PostsModule {}

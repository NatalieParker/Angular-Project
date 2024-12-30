import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from '../types/postState.interface';
import * as PostActions from './actions';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(PostActions.getPosts, (state) => {
    console.log('STATE: ', state);
    return { ...state, isLoading: true };
  })
);

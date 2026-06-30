/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

export interface PostsState {
  posts: Post[];
  currentPost: Post | null;
}

const initialState: PostsState = {
  posts: [],
  currentPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    setCurrentPost: (state, action: PayloadAction<Post | null>) => {
      state.currentPost = action.payload;
    },
  },
});

export const { setPosts, setCurrentPost } = postsSlice.actions;
export default postsSlice.reducer;

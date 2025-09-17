// src/store/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../modules/posts";


import counterReducer from "../modules/counter";
const rootReducer = combineReducers({
   counter: counterReducer,  //모듈 import를 하고 여기 안에 계속 추가해주기
  // 다른 slice 추가 가능
  posts: postsReducer,
});

// store 생성
export const store = configureStore({
  reducer: rootReducer,
});

// TypeScript에서 RootState와 AppDispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

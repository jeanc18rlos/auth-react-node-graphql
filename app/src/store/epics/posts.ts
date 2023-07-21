// postsEpics.ts
import { Epic, combineEpics, ofType } from "redux-observable";
import { from, of, Observable } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import ApolloClient from "../../services/apollo-client";

import {
  getPostsSuccess,
  getPostsFail,
  createPostSuccess,
  createPostFail,
  GetPostsAction,
} from "../actions/post";

import {
  GET_POSTS as GET_POSTS_QUERY,
  CREATE_POST as CREATE_POST_MUTATION,
} from "../../graphql";
import { PostActionTypes } from "../actions/post/postActionTypes";
import { Action } from "redux";

export const getPostsEpic: Epic<Action<PostActionTypes>> = (action$) =>
  action$.pipe(
    ofType(PostActionTypes.GET_POSTS_REQUEST),
    switchMap((action: any) =>
      from(
        ApolloClient.query({
          query: GET_POSTS_QUERY,
          variables: (action as GetPostsAction).payload,
        })
      ).pipe(
        map((response) => getPostsSuccess(response.data.posts)),
        catchError((error) => of(getPostsFail({ error: error.message })))
      )
    )
  );

export const createPostEpic: Epic<Action<PostActionTypes>> = (action$) =>
  action$.pipe(
    ofType(PostActionTypes.CREATE_POST_REQUEST),
    switchMap((action: any) =>
      from(
        ApolloClient.mutate({
          mutation: CREATE_POST_MUTATION,
          variables: action.payload,
        })
      ).pipe(
        map((response) => createPostSuccess(response.data.createPost)),
        catchError((error) => of(createPostFail({ error: error.message })))
      )
    )
  );

export default combineEpics(getPostsEpic, createPostEpic);

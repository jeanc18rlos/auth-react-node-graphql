import {
  ActionObject,
  ActionPayload,
  PayloadError,
} from "../../../types/actions";
import { Post } from "../../../types/post";
import { PostActionTypes } from "./postActionTypes";

// Get posts Payloads

export type GetPostsPayload = ActionPayload<Pick<Post, "userId">>;

export type GetPostsSuccessPayload = ActionPayload<{
  posts: Pick<Post, "id" | "title">[];
}>;

export type GetPostsFailPayload = ActionPayload<PayloadError>;

// Get Posts Action Objects

export type GetPostsAction = ActionObject<
  PostActionTypes.GET_POSTS_REQUEST,
  GetPostsPayload
>;

export type GetPostsSuccessAction = ActionObject<
  PostActionTypes.GET_POSTS_SUCCESS,
  GetPostsSuccessPayload
>;
export type GetPostsFailedAction = ActionObject<
  PostActionTypes.GET_POSTS_FAIL,
  GetPostsFailPayload
>;

export type GetPostsActions =
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailedAction;

// Get Posts Actions

export const getPostsRequest = (payload: GetPostsPayload): GetPostsAction => ({
  type: PostActionTypes.GET_POSTS_REQUEST,
  payload,
});

export const getPostsSuccess = (
  payload: GetPostsSuccessPayload
): GetPostsSuccessAction => ({
  type: PostActionTypes.GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFail = (error: unknown): GetPostsFailedAction => ({
  type: PostActionTypes.GET_POSTS_FAIL,
  payload: { error },
});

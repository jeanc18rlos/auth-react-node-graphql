import {
  ActionObject,
  ActionPayload,
  PayloadError,
} from "../../../types/actions";
import { Post } from "../../../types/post";
import { PostActionTypes } from "./postActionTypes";

// Create Post Payloads

export type CreatePostPayload = ActionPayload<Pick<Post, "userId" | "title">>;

export type CreatePostSuccessPayload = ActionPayload<
  Pick<Post, "id" | "title">
>;

export type CreatePostFailPayload = ActionPayload<PayloadError>;

// Create Post Action Objects

export type CreatePostAction = ActionObject<
  PostActionTypes.CREATE_POST_REQUEST,
  CreatePostPayload
>;

export type CreatePostSuccessAction = ActionObject<
  PostActionTypes.CREATE_POST_SUCCESS,
  CreatePostPayload
>;
export type CreatePostFailedAction = ActionObject<
  PostActionTypes.CREATE_POST_FAIL,
  CreatePostFailPayload
>;

export type CreatePostActions =
  | CreatePostAction
  | CreatePostSuccessAction
  | CreatePostFailedAction;

// Create Post Actions

export const createPostRequest = (payload: CreatePostPayload) => ({
  type: PostActionTypes.CREATE_POST_REQUEST,
  payload,
});

export const createPostSuccess = (payload: Post) => ({
  type: PostActionTypes.CREATE_POST_SUCCESS,
  payload,
});

export const createPostFail = (error: unknown) => ({
  type: PostActionTypes.CREATE_POST_FAIL,
  payload: { error },
});

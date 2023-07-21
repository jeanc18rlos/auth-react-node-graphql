import { CreatePostActions } from "./createPost";
import { GetPostsActions } from "./getPost";

export type PostActionCreators = GetPostsActions | CreatePostActions;

export * from "./createPost";
export * from "./getPost";

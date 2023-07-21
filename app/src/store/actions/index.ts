import { AuthActionCreators } from "./auth"
import { PostActionCreators } from "./post"

export * from "./auth"
export * from "./post"

export type ActionCreators = PostActionCreators | AuthActionCreators

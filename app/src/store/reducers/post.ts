import { PostActionCreators } from "../actions";
import { PostActionTypes } from "../actions/post/postActionTypes";

const initialAuthState = {
  posts: [],
  loading: false,
  error: null,
};

const authReducer = (state = initialAuthState, action: PostActionCreators) => {
  switch (action.type) {
    case PostActionTypes.GET_POSTS_REQUEST:
    case PostActionTypes.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PostActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case PostActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };

    case PostActionTypes.GET_POSTS_FAIL:
    case PostActionTypes.CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

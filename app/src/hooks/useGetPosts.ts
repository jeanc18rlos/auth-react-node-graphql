import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../store/actions/post";

// Hook to get posts
export const useGetPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state:any) => state.posts);

  return {
    getPosts: (id: any) => {
      dispatch(
        getPostsRequest({
          userId: id,
        })
      );
    },
    posts,
  };
};


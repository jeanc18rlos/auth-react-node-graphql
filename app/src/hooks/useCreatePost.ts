import { useDispatch } from "react-redux";
import { createPostRequest } from "../store/actions/post";

export const useCreatePost = () => {
  const dispatch = useDispatch();

  return (userId: any, title: any) => {
    dispatch(createPostRequest({ userId, title }));
  };
};

import { gql } from "@apollo/client";

// queries
export const GET_POSTS = gql`
  query getPosts($userId: Float!) {
    posts(userId: $userId) {
      id
      title
    }
  }
`;

// mutations
export const CREATE_POST = gql`
  mutation createPost($userId: Int!, $title: String!) {
    createPost(userId: $userId, title: $title) {
      id
      title
    }
  }
`;

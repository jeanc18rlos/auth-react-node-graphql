import { gql } from "@apollo/client";

// mutations 
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      id
      email
    }
  }
`;

export const CREATE_USER = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const REQUEST_PASSWORD_CHANGE = gql`
  mutation requestPasswordChange($email: String!) {
    requestPasswordChange(email: $email) {
      password_change_token
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation confirmPasswordChange(
    $email: String!
    $newPassword: String!
    $token: String!
  ) {
    confirmPasswordChange(
      email: $email
      newPassword: $newPassword
      token: $token
    )
  }
`;

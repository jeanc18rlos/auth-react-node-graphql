import {
  ActionObject,
  ActionPayload,
  PayloadError,
} from "../../../types/actions";
import { User } from "../../../types/user";
import { AuthActionTypes } from "./ActionTypes";

// Register Payloads
export type RegisterUserPayload = ActionPayload<
  Pick<User, "email" | "password">
>;
export type RegisterUserSucessPayload = ActionPayload<
  Pick<User, "id" | "email">
>;
export type RegisterUserFailPayload = ActionPayload<PayloadError>;

// Register Action Objects

export type registerUserAction = ActionObject<
  AuthActionTypes.REGISTER_USER,
  RegisterUserPayload
>;

export type registerUserSuccessAction = ActionObject<
  AuthActionTypes.REGISTER_USER_SUCCESS,
  RegisterUserSucessPayload
>;

export type registerUserFailedAction = ActionObject<
  AuthActionTypes.REGISTER_USER_FAILED,
  RegisterUserFailPayload
>;

export type RegisterActions =
  | registerUserFailedAction
  | registerUserSuccessAction
  | registerUserAction;


// Login Actions

export const registerUser = (
  payload: RegisterUserPayload
): registerUserAction => ({
  type: AuthActionTypes.REGISTER_USER,
  payload,
});

export const registerUserSuccess = (
  user: RegisterUserSucessPayload
): registerUserSuccessAction => ({
  type: AuthActionTypes.REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailed = (error: Error) => ({
  type: AuthActionTypes.REGISTER_USER_FAILED,
  payload: error,
});

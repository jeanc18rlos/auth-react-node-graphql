import {
  ActionObject,
  ActionPayload,
  PayloadError,
} from "../../../types/actions";
import { User } from "../../../types/user";
import { AuthActionTypes } from "./ActionTypes";

// Login Payloads

export type LoginPayload = ActionPayload<Pick<User, "email" | "password">>;
export type LoginSuccessPayload = ActionPayload<
  Pick<User, "email" | "id" | "access_token">
>;
export type LoginFailPayload = ActionPayload<PayloadError>;

// Login Action Objects

export type loginUserAction = ActionObject<
  AuthActionTypes.LOGIN_USER,
  LoginPayload
>;

export type loginUserSuccessAction = ActionObject<
  AuthActionTypes.LOGIN_USER_SUCCESS,
  LoginSuccessPayload
>;

export type loginUserFailedAction = ActionObject<
  AuthActionTypes.LOGIN_USER_FAILED,
  LoginFailPayload
>;

export type LoginActions =
  | loginUserAction
  | loginUserSuccessAction
  | loginUserFailedAction;

// Login Actions

export const loginUser = (payload: LoginPayload): loginUserAction => ({
  type: AuthActionTypes.LOGIN_USER,
  payload,
});

export const loginUserSuccess = (
  user: LoginSuccessPayload
): loginUserSuccessAction => ({
  type: AuthActionTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailed = (error: {
  error: Error;
}): loginUserFailedAction => ({
  type: AuthActionTypes.LOGIN_USER_FAILED,
  payload: error,
});

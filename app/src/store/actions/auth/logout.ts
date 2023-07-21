import {
  ActionObject,
  ActionPayload,
  PayloadError,
  PlainActionObject,
} from "../../../types/actions";
import { AuthActionTypes } from "./ActionTypes";

// Logout Payloads

export type LogoutFailPayload = ActionPayload<PayloadError>;

// Logout Action Objects

export type logoutUserAction = PlainActionObject<AuthActionTypes.LOGOUT_USER>;
export type logoutUserSuccessAction =
  PlainActionObject<AuthActionTypes.LOGOUT_USER_SUCCESS>;
export type logoutUserFailedAction = ActionObject<
  AuthActionTypes.LOGOUT_USER_FAILED,
  LogoutFailPayload
>;

export type LogoutActions =
  | logoutUserAction
  | logoutUserSuccessAction
  | logoutUserFailedAction;

// Logout Actions

export const logoutUser = (): logoutUserAction => ({
  type: AuthActionTypes.LOGOUT_USER,
});

export const logoutUserSuccess = (): logoutUserSuccessAction => ({
  type: AuthActionTypes.LOGOUT_USER_SUCCESS,
});

export const logoutUserFailed = (error: unknown): logoutUserFailedAction => ({
  type: AuthActionTypes.LOGOUT_USER_FAILED,
  payload: { error },
});

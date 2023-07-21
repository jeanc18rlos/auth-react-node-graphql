import {
  ActionObject,
  ActionPayload,
  PayloadError,
  PlainActionObject,
} from "../../../types/actions";
import { User } from "../../../types/user";
import { AuthActionTypes } from "./ActionTypes";

// Password Change Payloads
export type PasswordChangePayload = ActionPayload<
  Pick<User, "email" | "newPassword" | "password_change_token">
>;

export type PasswordChangeFailPayload = ActionPayload<PayloadError>;

//  Password Change Action Objects

export type PasswordChangeAction = ActionObject<
  AuthActionTypes.CHANGE_PASSWORD,
  PasswordChangePayload
>;

export type PasswordChangeSuccessAction =
  PlainActionObject<AuthActionTypes.CHANGE_PASSWORD_SUCCESS>;

export type PasswordChangeFailedAction = ActionObject<
  AuthActionTypes.CHANGE_PASSWORD_FAILED,
  PasswordChangeFailPayload
>;

export type PasswordChangeActions =
  | PasswordChangeAction
  | PasswordChangeSuccessAction
  | PasswordChangeFailedAction;

// Change password Actions

export const changePassword = (
  payload: PasswordChangePayload
): PasswordChangeAction => ({
  type: AuthActionTypes.CHANGE_PASSWORD,
  payload,
});

export const changePasswordSuccess = (): PasswordChangeSuccessAction => ({
  type: AuthActionTypes.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFailed = (
  error: Error
): PasswordChangeFailedAction => ({
  type: AuthActionTypes.CHANGE_PASSWORD_FAILED,
  payload: { error },
});

import {
  ActionObject,
  ActionPayload,
  PayloadError,
} from "../../../types/actions";
import { User } from "../../../types/user";
import { AuthActionTypes } from "./ActionTypes";

// Request Password Change Payloads

export type PasswordChangeRequestPayload = ActionPayload<Pick<User, "email">>;
export type PasswordChangeRequestPayloadSuccess = ActionPayload<
  Pick<User, "password_change_token">
>;
export type PasswordChangeRequestFailPayload = ActionPayload<PayloadError>;

// Request Password Change Action Objects

export type requestPasswordChangeAction = ActionObject<
  AuthActionTypes.REQUEST_PASSWORD_CHANGE,
  PasswordChangeRequestPayload
>;

export type requestPasswordChangeSuccessAction = ActionObject<
  AuthActionTypes.REQUEST_PASSWORD_CHANGE_SUCCESS,
  PasswordChangeRequestPayloadSuccess
>;

export type requestPasswordChangeFailedAction = ActionObject<
  AuthActionTypes.REQUEST_PASSWORD_CHANGE_FAILED,
  PasswordChangeRequestFailPayload
>;

export type RequestPasswordChangeActions =
  | requestPasswordChangeAction
  | requestPasswordChangeSuccessAction
  | requestPasswordChangeFailedAction;

// Request Password Change Actions

export const requestPasswordChange = (
  payload: PasswordChangeRequestPayload
): requestPasswordChangeAction => ({
  type: AuthActionTypes.REQUEST_PASSWORD_CHANGE,
  payload,
});

export const requestPasswordChangeSuccess = (
  payload: PasswordChangeRequestPayloadSuccess
) => ({
  type: AuthActionTypes.REQUEST_PASSWORD_CHANGE_SUCCESS,
  payload,
});

export const requestPasswordChangeFailed = (
  error: Error
) => ({
  type: AuthActionTypes.REQUEST_PASSWORD_CHANGE_FAILED,
  payload: error,
});

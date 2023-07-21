// authEpic.ts
import { combineEpics, ofType } from "redux-observable";
import { from, of, tap } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import ApolloClient from "../../services/apollo-client";

import { AuthActionTypes } from "../actions/auth/ActionTypes";

import {
  loginUserSuccess,
  loginUserFailed,
  registerUserSuccess,
  registerUserFailed,
  requestPasswordChangeSuccess,
  requestPasswordChangeFailed,
  changePasswordSuccess,
  changePasswordFailed,
  logoutUserSuccess,
  logoutUserFailed,
} from "../actions/auth";

import {
  LOGIN_USER as LOGIN_USER_MUTATION,
  CREATE_USER as CREATE_USER_MUTATION,
  REQUEST_PASSWORD_CHANGE as REQUEST_PASSWORD_CHANGE_MUTATION,
  CHANGE_PASSWORD as CHANGE_PASSWORD_MUTATION,
} from "../../graphql";

export const loginUserEpic = (action$: any) =>
  action$.pipe(
    ofType(AuthActionTypes.LOGIN_USER),
    switchMap((action: any) =>
      from(
        ApolloClient.mutate({
          mutation: LOGIN_USER_MUTATION,
          variables: action.payload,
        })
      ).pipe(
        tap((response) => {
          // If login was successful, store the token in localStorage
      
          if (
            response.data &&
            response.data.login &&
            response.data.login.access_token
          ) {
            localStorage.setItem("token", response.data.login.access_token);
          }
        }),
        map((response) => loginUserSuccess(response.data.login)),
        catchError((error) => of(loginUserFailed(error.message)))
      )
    )
  );

export const createUserEpic = (action$: any) =>
  action$.pipe(
    ofType(AuthActionTypes.REGISTER_USER),
    switchMap((action: any) =>
      from(
        ApolloClient.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: action.payload,
        })
      ).pipe(
        map((response) => registerUserSuccess(response.data.register)),
        catchError((error) => of(registerUserFailed(error.message)))
      )
    )
  );

export const requestPasswordChangeCodeEpic = (action$: any) =>
  action$.pipe(
    ofType(AuthActionTypes.REQUEST_PASSWORD_CHANGE),
    switchMap((action: any) =>
      from(
        ApolloClient.mutate({
          mutation: REQUEST_PASSWORD_CHANGE_MUTATION,
          variables: action.payload,
        })
      ).pipe(
        map((response) =>
          requestPasswordChangeSuccess(response.data.requestPasswordChange)
        ),
        catchError((error) => of(requestPasswordChangeFailed(error.message)))
      )
    )
  );

export const changePasswordEpic = (action$: any) =>
  action$.pipe(
    ofType(AuthActionTypes.CHANGE_PASSWORD),
    switchMap((action: any) =>
      from(
        ApolloClient.mutate({
          mutation: CHANGE_PASSWORD_MUTATION,
          variables: {
            token: action.payload.password_change_token,
            ...action.payload
          },
        })
      ).pipe(
        map(() => changePasswordSuccess()), // Since we don't have a specific response for password change.
        catchError((error) => of(changePasswordFailed(error.message)))
      )
    )
  );

export const logoutEpic = (action$: any) =>
  action$.pipe(
    ofType(AuthActionTypes.LOGOUT_USER),
    switchMap(() =>
      // Here I'm assuming your logout logic, which could vary. This is just an example.
      from(
        new Promise((resolve, reject) => {
          ApolloClient.resetStore(); // Resetting Apollo store upon logout.
          resolve(null);
        })
      ).pipe(
        tap(() => {
          localStorage.clear();
        }),
        map(() => logoutUserSuccess()), // We don't need a specific response for logout.
        catchError((error) => of(logoutUserFailed(error.message)))
      )
    )
  );

export default combineEpics(
  loginUserEpic,
  createUserEpic,
  requestPasswordChangeCodeEpic,
  changePasswordEpic,
  logoutEpic
);

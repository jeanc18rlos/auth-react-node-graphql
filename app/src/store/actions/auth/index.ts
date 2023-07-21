import { PasswordChangeActions } from "./changePassword";
import { LoginActions } from "./login";
import { LogoutActions } from "./logout";
import { RegisterActions } from "./register";
import { RequestPasswordChangeActions } from "./requestPasswordChange";

export type AuthActionCreators = LoginActions | RegisterActions | PasswordChangeActions | LogoutActions | RequestPasswordChangeActions


export * from "./changePassword";
export * from "./login";
export * from "./logout";
export * from "./register";
export * from "./requestPasswordChange"
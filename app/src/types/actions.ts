export type ActionPayload<T> = T;

export type PayloadError = {
  error: unknown;
};

export interface ActionObject<T, P> {
  type: T;
  payload: P;
}

export interface PlainActionObject<T>
  extends Pick<ActionObject<T, undefined>, "type"> {}

export type ActionFunction<O, I> = (params: I) => O;

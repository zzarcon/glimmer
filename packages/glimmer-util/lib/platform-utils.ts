export interface Constructor<T> {
  new(...args: any[]): T;
}

export interface Class<T> {
  name: string;
  prototype: T;
}

export type Option<T> = T | null; // tslint:disable-line
export type Maybe<T> = Option<T> | undefined; // tslint:disable-line

export type Opaque = Maybe<{} | void>;

export function opaque(value: Opaque): Opaque {
  return value;
}

export function unwrap<T>(val: Maybe<T>): T {
  if (val === null || val === undefined) throw new Error(`Expected value to be present`);
  return val;
}

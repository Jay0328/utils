/**
 * @module validator
 */

/**
 * validate a string is email or not.
 */
export function isEmail(arg: string): boolean {
  // tslint:disable-next-line:max-line-length
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(arg);
}

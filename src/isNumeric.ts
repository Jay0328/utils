/**
 * @module validator
 */

/**
 * @param arg argument will be tested if it is numeric or not.
 */
export function isNumeric(arg: number | string): boolean {
  return !Number.isNaN(parseFloat(`${arg}`)) && isFinite(arg as number);
}

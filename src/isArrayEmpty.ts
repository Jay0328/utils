/**
 * @module validator
 */

export function isArrayEmpty(arg: any[]): boolean {
  if (!Array.isArray(arg)) {
    throw new Error('arg should be array.');
  }

  return arg.length === 0;
}

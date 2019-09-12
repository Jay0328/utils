/**
 * get length of precisions
 * 
 * ```ts
 * getPrecisionLength(1.123) === 3
 * ```
 */
export function getPrecisionLength(num: number): number {
  if (typeof num !== 'number') {
    throw new Error('Parameter should be number.');
  }

  const [, precisions] = `${num}`.split('.');

  if (precisions === undefined) {
    return 0;
  }

  return precisions.length;
}

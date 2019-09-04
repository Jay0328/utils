/**
 * @param arg source number.
 * @param precisions length of precisions.
 * 
 * ```ts
 * formatPrecision(1.1234, 2) === 1.12
 * ```
 */
export function formatPrecision(arg: number, precisions: number): number {
  const size = 10 ** precisions;
  return Math.round(arg * size) / size;
}

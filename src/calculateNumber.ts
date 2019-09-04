import { getPrecisionLength } from './getPrecisionLength';

/**
 * type of operator for `calculate`.
 */
export type CalculateNumberOperator =
  | '+'
  | '-'
  | '*'
  | '/'
  | '%';
/**
 * @ignore
 */
type Calculator = {
  [operator in CalculateNumberOperator]: (number1: number, number2: number, multiplier: number) => number;
};
/**
 * @ignore
 */
const calculator: Calculator = {
  '+': (number1, number2, multiplier) => (
    ((number1 * multiplier) + (number2 * multiplier)) / multiplier
  ),
  '-': (number1, number2, multiplier) => (
    ((number1 * multiplier) - (number2 * multiplier)) / multiplier
  ),
  '*': (number1, number2, multiplier) => (
    ((number1 * multiplier) * (number2 * multiplier)) / (multiplier * multiplier)
  ),
  '/': (number1, number2, multiplier) => (
    ((number1 * multiplier) / (number2 * multiplier))
  ),
  '%': (number1, number2, multiplier) => (
    ((number1 * multiplier) % (number2 * multiplier)) / multiplier
  ),
};
/**
 * There are some error result on native. Use this method to prevent from that.
 * 
 * ```ts
 * 3.1 * 3.04 === 9.424000000000001
 * calculate(3.1, '*', 3.04) === 9.424
 * ```
 */
export function calculateNumber(number1: number, operator: CalculateNumberOperator, number2: number): number {
  /**
   * number1 and nunber2 maybe as zero
   */
  if (
    typeof number1 !== 'number' ||
    typeof number2 !== 'number' ||
    !operator ||
    !(operator in calculator)
  ) {
    return NaN;
  }

  const dividendPrecision = getPrecisionLength(number1);
  const divisorPrecision = getPrecisionLength(number2);
  const biggestDemical = dividendPrecision > divisorPrecision ? dividendPrecision : divisorPrecision;
  const multiplier = 10 ** biggestDemical;

  return calculator[operator](number1, number2, multiplier);
}

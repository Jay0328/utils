/**
 * @module decorator
 */

/**
 * Add debounce to a function.
 * 
 * @typeparam T type or interface of origin function.
 * @param time debounce time.
 * @returns The behavior is the same as origin function, but with debounce.
 * 
 * ```ts
 * const origin = () => ...;
 * const result = debounce(250)(origin);
 * ```
 * 
 * ```ts
 * class Greeter {
 * 	greeting: string;
 * 	constructor(message: string) {
 * 		this.greeting = message;
 * 	}
 * 
 * 	@debounce(500)
 * 	greet = () => `Hello, ${this.greeting}`;
 * }
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(time: number) {
  return (fn: T) => {
    let timer: number | NodeJS.Timeout;
    return function (...args: Parameters<T>): any {
      // @ts-ignore
      const context = this;
      clearTimeout(timer as number);
      timer = setTimeout(fn.bind(context, ...args), time);
    };
  };
}

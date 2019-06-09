/**
 * @module decorator
 */

/**
 * Add throttle to a function.
 * 
 * @typeparam T type or interface of origin function.
 * @param time debounce time.
 * @returns The behavior is the same as origin function, but with throttle.
 * 
 * ```ts
 * const origin = () => ...;
 * const result = throttle(250)(origin);
 * ```
 * 
 * ```ts
 * class Greeter {
 * 	greeting: string;
 * 	constructor(message: string) {
 * 		this.greeting = message;
 * 	}
 * 
 * 	@throttle(500)
 * 	greet = () => `Hello, ${this.greeting}`;
 * }
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(time: number) {
	return (fn: T) => {
		let previous: number;

		return function (...args: Parameters<T>): any {
			// @ts-ignore
			const context = this;
			const now = +(new Date());

			if (!previous || (now - previous) > time) {
				fn.apply(context, args);
				previous = now;
			}
		};
	};
}

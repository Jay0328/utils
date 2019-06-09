/**
 * @module decorator
 */

/**
 * Add exhaust to a function.
 * 
 * @typeparam T type or interface of origin function.
 * @param time debounce time.
 * @returns The behavior is the same as origin function, but with exhaust.
 * 
 * ```ts
 * const origin = () => ...;
 * const result = exhaust(250)(origin);
 * ```
 * 
 * ```ts
 * class Greeter {
 * 	greeting: string;
 * 	constructor(message: string) {
 * 		this.greeting = message;
 * 	}
 * 
 * 	@exhaust(500)
 * 	greet = () => `Hello, ${this.greeting}`;
 * }
 * ```
 */
export function exhaust<T extends (...args: any[]) => any>(time: number) {
	return (fn: T) => {
		let done = true;
		let timer: number | NodeJS.Timeout;

		return function (...args: Parameters<T>): any {
			// @ts-ignore
			const context = this;
			if (done) {
				fn.apply(context, args);
				done = false;
			}

			if (timer) {
				clearTimeout(timer as number);
			}

			timer = setTimeout(() => {
				done = true;
			}, time);
		};
	};
}

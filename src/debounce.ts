/**
 * Add debounce to a function.
 * 
 * @typeparam F type or interface of origin function.
 * @param time debounce time.
 * @returns The behavior is the same as origin function, but with debounce.
 * 
 * ```ts
 * const origin = () => ...;
 * const result = debounce(250)(origin);
 * ```
 */
export function debounce(time: number) {
  return <F extends (...args: any[]) => void>(fn: F) => {
    let timer: number | NodeJS.Timeout;
    return function (...args: Parameters<F>): void {
      // @ts-ignore
      const context = this;
      clearTimeout(timer as number);
      timer = setTimeout(fn.bind(context, ...args), time);
    };
  };
}

/**
 * Add debounce to a function.
 * 
 * @typeparam F type or interface of origin function.
 * @param time debounce time.
 * @returns The behavior is the same as origin function, but with debounce.
 * 
 * ```ts
 * class Greeter {
 * 	greeting: string;
 * 
 * 	constructor(message: string) {
 * 		this.greeting = message;
 * 	}
 * 
 * 	@Debounce(500)
 * 	greet() {
 *    console.log(`Hello, ${this.greeting}`);
 *  }
 * }
 * ```
 */
export function Debounce(time: number) {
  return function <F extends (...args: any[]) => void>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<F>
  ) {
    const originalMethod = descriptor.value;

    if (originalMethod) {
      descriptor.value = debounce(time)(originalMethod) as F;
    }

    return descriptor;
  };
}

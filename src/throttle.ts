/**
 * A factory to create throttled function.
 * 
 * @typeparam F type or interface of origin function.
 * 
 * @param time debounce time.
 * 
 * @returns The behavior is the same as origin function, but throttled.
 * 
 * @example
 * 
 * const origin = () => ...;
 * const result = throttle(250)(origin);
 */
export function throttle(time: number) {
  return <F extends (...args: any[]) => void>(fn: F) => {
    let previous: number;

    return function (...args: Parameters<F>): void {
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

/**
 * A decorator to create throttled instance method.
 * 
 * @typeparam F type or interface of origin function.
 * 
 * @param time debounce time.
 * 
 * @returns The behavior is the same as origin function, but throttled.
 * 
 * @example
 * 
 * class Greeter {
 * 	greeting: string;
 * 	constructor(message: string) {
 * 		this.greeting = message;
 * 	}
 * 
 * 	@Throttle(500)
 * 	greet = () => `Hello, ${this.greeting}`;
 * }
 */
export function Throttle(time: number) {
  return function <F extends (...args: any[]) => void>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<F>
  ) {
    const originalMethod = descriptor.value;

    if (originalMethod) {
      descriptor.value = throttle(time)(originalMethod) as F;
    }

    return descriptor;
  };
}

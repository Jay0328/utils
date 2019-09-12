/**
 * A factory to create exhausted function.
 * 
 * @typeparam F type or interface of origin function.
 * 
 * @param time debounce time.
 * 
 * @returns The behavior is the same as origin function, but exhausted.
 * 
 * @example
 * 
 * const origin = () => ...;
 * const result = exhaust(250)(origin);
 */
export function exhaust(time: number) {
  return <F extends (...args: any[]) => void>(fn: F) => {
    let done = true;
    let timer: number | NodeJS.Timeout;

    return function (...args: Parameters<F>): void {
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

/**
 * A decorator to create exhausted instance method.
 * 
 * @typeparam F type or interface of origin function.
 * 
 * @param time debounce time.
 * 
 * @returns The behavior is the same as origin function, but exhausted.
 * 
 * @example
 * 
 * class Greeter {
 * 	greeting: string;
 * 	constructor(message: string) {
 * 		this.greeting = message;
 * 	}
 * 
 * 	@Exhaust(500)
 * 	greet = () => `Hello, ${this.greeting}`;
 * }
 */
export function Exhaust(time: number) {
  return function <F extends (...args: any[]) => void>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<F>
  ) {
    const originalMethod = descriptor.value;

    if (originalMethod) {
      descriptor.value = exhaust(time)(originalMethod) as F;
    }

    return descriptor;
  };
}

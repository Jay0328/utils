import { debounce, Debounce } from '../debounce';

function asFactoryTest(d: any) {
	test('should create a factory', () => {
		expect(d).toBeInstanceOf(Function);
		expect(d(200)).toBeInstanceOf(Function);
	});
}

function sameParametersTest(callback: (fn: jest.Mock<any, any>) => (...args: any[]) => void) {
	test('parameters of debounced function should be the same as the parameters of original function', () => {
		const fn = jest.fn();

		callback(fn)(1, '2', true, [3, 4, 5], { a: 6 });

		jest.runAllTimers();

		expect(fn).toHaveBeenCalledTimes(1);
		expect(fn.mock.calls[0][0]).toBe(1);
		expect(fn.mock.calls[0][1]).toBe('2');
		expect(fn.mock.calls[0][2]).toBe(true);
		expect(fn.mock.calls[0][3]).toEqual([3, 4, 5]);
		expect(fn.mock.calls[0][4]).toEqual({ a: 6 });
	});
}

function invokedTest(callback: (fn: jest.Mock<any, any>, debounceTime: number) => (...args: any[]) => void) {
	test('should delays invoking function until after wait milliseconds have elapsed since the last time the debounced function was invoked', () => {
		const fn = jest.fn();
		const debounceTime = 1000;
		const debouncedFn = callback(fn, debounceTime);

		debouncedFn(1);
		debouncedFn(2);

		expect(fn).toHaveBeenCalledTimes(0);

		jest.advanceTimersByTime(debounceTime);

		expect(fn).toHaveBeenCalledTimes(1);
		expect(fn.mock.calls[0][0]).toBe(2);

		debouncedFn(3);
		debouncedFn(4);
		debouncedFn(5);

		jest.advanceTimersByTime(debounceTime / 2);
		expect(fn).toHaveBeenCalledTimes(1);

		debouncedFn(6);

		jest.advanceTimersByTime(debounceTime / 2);
		expect(fn).toHaveBeenCalledTimes(1);

		jest.advanceTimersByTime(debounceTime / 2);
		expect(fn).toHaveBeenCalledTimes(2);
		expect(fn.mock.calls[1][0]).toBe(6);
	});
}

function bindToCorrectThisTest(getTestBed: any) {
	test('should bind to correct this', () => {
		const TestBed = getTestBed();
		const testBed = new TestBed();

		testBed.debouncedFn(1);
		testBed.debouncedFn(2);
		testBed.debouncedFn(3);

		expect(testBed.num).toBe(0);

		jest.runAllTimers();

		expect(testBed.num).toBe(3);
	});
}

jest.useFakeTimers();

describe('debounce', () => {
	beforeEach(() => {
		jest.runAllTimers();
	});

	describe('debounce', () => {
		asFactoryTest(debounce);
		sameParametersTest(fn => debounce(1000)(fn));
		invokedTest((fn, debounceTime) => debounce(debounceTime)(fn));
		bindToCorrectThisTest(() => (
			class TestBed {
				num: number = 0;
				debouncedFn: (num: number) => void = debounce(1000)(num => { this.num = num; });
			}
		));
	});

	describe('Debounce', () => {
		function createTestBed(fn: jest.Mock<any, any>, debounceTime: number) {
			class TestBed {
				@Debounce(debounceTime)
				debouncedFn(...args: any[]) {
					fn(...args);
				}
			}

			return new TestBed();
		}

		asFactoryTest(Debounce);
		sameParametersTest(fn => {
			const testBed = createTestBed(fn, 1000);
			return (...args) => testBed.debouncedFn(...args);
		});
		invokedTest((fn, debounceTime) => {
			const testBed = createTestBed(fn, debounceTime);
			return (...args) => testBed.debouncedFn(...args);
		});
		bindToCorrectThisTest(() => {
			class TestBed {
				num: number = 0;

				@Debounce(1000)
				debouncedFn(num: number) {
					this.num = num;
				}
			}

			return TestBed;
		});
	});
});

import { formatPrecision } from '../formatPrecision';

describe('formatPrecision', () => {
	test('number or precisions not number', () => {
		expect(formatPrecision(undefined, 1)).toBe(NaN);
		expect(formatPrecision(2, null)).toBe(NaN);
		// @ts-ignore
		expect(formatPrecision(false, 1)).toBe(NaN);
		// @ts-ignore
		expect(formatPrecision(2, true)).toBe(NaN);
		// @ts-ignore
		expect(formatPrecision([1, 2, 3], 1)).toBe(NaN);
		// @ts-ignore
		expect(formatPrecision(2, { a: 1, b: 2 })).toBe(NaN);
	});

	test('integer', () => {
		expect(formatPrecision(1, 1)).toBe(1);
		expect(formatPrecision(1, 2)).toBe(1);
		expect(formatPrecision(1, 3)).toBe(1);
		expect(formatPrecision(125124, 1)).toBe(125124);
		expect(formatPrecision(125124, 2)).toBe(125124);
		expect(formatPrecision(125124, 3)).toBe(125124);
	});

	test('float', () => {
		expect(formatPrecision(1.3, 1)).toBe(1.3);
		expect(formatPrecision(1.32, 1)).toBe(1.3);
		expect(formatPrecision(1.321, 1)).toBe(1.3);
		expect(formatPrecision(1.3, 2)).toBe(1.3);
		expect(formatPrecision(1.32, 2)).toBe(1.32);
		expect(formatPrecision(1.321, 2)).toBe(1.32);
		expect(formatPrecision(1.3, 3)).toBe(1.3);
		expect(formatPrecision(1.32, 3)).toBe(1.32);
		expect(formatPrecision(1.321, 3)).toBe(1.321);
	});
});

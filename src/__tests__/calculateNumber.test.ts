import { calculateNumber } from '../calculateNumber';

describe('calculateNumber', () => {
	test('invalid parameter', () => {
		// @ts-ignore
		expect(calculateNumber(undefined, 'a', null)).toBe(NaN);
		// @ts-ignore
		expect(calculateNumber('ab', 'a', [1, 2])).toBe(NaN);
		// @ts-ignore
		expect(calculateNumber(true, 'a', { a: 1 })).toBe(NaN);
		// @ts-ignore
		expect(calculateNumber(1, 'a', 2)).toBe(NaN);
		// @ts-ignore
		expect(calculateNumber(1, '+', false)).toBe(NaN);
		// @ts-ignore
		expect(calculateNumber([1, 2], '+', 2)).toBe(NaN);
	});

	test('+', () => {
		expect(calculateNumber(1, '+', 2)).toBe(3);
		expect(calculateNumber(2, '+', 1)).toBe(3);
		expect(calculateNumber(1, '+', 0.3)).toBe(1.3);
		expect(calculateNumber(0.3, '+', 1)).toBe(1.3);
		expect(calculateNumber(3.1, '+', 3.04)).toBe(6.14);
		expect(calculateNumber(3.04, '+', 3.1)).toBe(6.14);
		expect(calculateNumber(3.1, '+', -3.04)).toBe(0.06);
		expect(calculateNumber(-3.1, '+', 3.04)).toBe(-0.06);
		expect(calculateNumber(3.04, '+', -3.1)).toBe(-0.06);
		expect(calculateNumber(-3.04, '+', 3.1)).toBe(0.06);
	});

	test('-', () => {
		expect(calculateNumber(1, '-', 2)).toBe(-1);
		expect(calculateNumber(2, '-', 1)).toBe(1);
		expect(calculateNumber(1, '-', 0.3)).toBe(0.7);
		expect(calculateNumber(0.3, '-', 1)).toBe(-0.7);
		expect(calculateNumber(3.1, '-', 3.04)).toBe(0.06);
		expect(calculateNumber(3.04, '-', 3.1)).toBe(-0.06);
		expect(calculateNumber(3.1, '-', -3.04)).toBe(6.14);
		expect(calculateNumber(-3.1, '-', 3.04)).toBe(-6.14);
		expect(calculateNumber(3.04, '-', -3.1)).toBe(6.14);
		expect(calculateNumber(-3.04, '-', 3.1)).toBe(-6.14);
	});

	test('*', () => {
		expect(calculateNumber(1, '*', 2)).toBe(2);
		expect(calculateNumber(2, '*', 1)).toBe(2);
		expect(calculateNumber(1, '*', 0.3)).toBe(0.3);
		expect(calculateNumber(0.3, '*', 1)).toBe(0.3);
		expect(calculateNumber(3.1, '*', 3.04)).toBe(9.424);
		expect(calculateNumber(3.04, '*', 3.1)).toBe(9.424);
		expect(calculateNumber(3.1, '*', -3.04)).toBe(-9.424);
		expect(calculateNumber(-3.1, '*', 3.04)).toBe(-9.424);
		expect(calculateNumber(3.04, '*', -3.1)).toBe(-9.424);
		expect(calculateNumber(-3.04, '*', 3.1)).toBe(-9.424);
	});

	test('/', () => {
		expect(calculateNumber(1, '/', 2)).toBe(0.5);
		expect(calculateNumber(2, '/', 1)).toBe(2);
		expect(calculateNumber(0.3, '/', 1)).toBe(0.3);
		expect(calculateNumber(2.7, '/', 0.27)).toBe(10);
		expect(calculateNumber(0.27, '/', 2.7)).toBe(0.1);
		expect(calculateNumber(2.7, '/', -0.27)).toBe(-10);
		expect(calculateNumber(-0.27, '/', 2.7)).toBe(-0.1);
		expect(calculateNumber(-2.7, '/', 0.27)).toBe(-10);
		expect(calculateNumber(0.27, '/', -2.7)).toBe(-0.1);
	});

	test('%', () => {
		expect(calculateNumber(1, '%', 2)).toBe(1);
		expect(calculateNumber(2, '%', 1)).toBe(0);
		expect(calculateNumber(0.3, '%', 1)).toBe(0.3);
		expect(calculateNumber(1, '%', 0.3)).toBe(0.1);
		expect(calculateNumber(2.3, '%', 0.7)).toBe(0.2);
		expect(calculateNumber(0.7, '%', 2.3)).toBe(0.7);
		expect(calculateNumber(2.3, '%', -0.7)).toBe(0.2);
		expect(calculateNumber(-0.7, '%', 2.3)).toBe(-0.7);
		expect(calculateNumber(-2.3, '%', 0.7)).toBe(-0.2);
		expect(calculateNumber(0.7, '%', -2.3)).toBe(0.7);
	});
});

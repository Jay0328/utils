import { getPrecisionLength } from '../getPrecisionLength';

describe('getPrecisionLength', () => {
	test('parameter not number', () => {
		//	@ts-ignore
		expect(() => getPrecisionLength()).toThrowError();
		//	@ts-ignore
		expect(() => getPrecisionLength(undefined)).toThrowError();
		//	@ts-ignore
		expect(() => getPrecisionLength('123')).toThrowError();
		//	@ts-ignore
		expect(() => getPrecisionLength({ a: 1 })).toThrowError();
		//	@ts-ignore
		expect(() => getPrecisionLength([1, 2, 3])).toThrowError();
	});

	test('pass NaN or Infinity should return 0', () => {
		expect(getPrecisionLength(NaN)).toBe(0);
		expect(getPrecisionLength(Infinity)).toBe(0);
	});

	test('pass integer should return 0', () => {
		expect(getPrecisionLength(0)).toBe(0);
		expect(getPrecisionLength(1)).toBe(0);
		expect(getPrecisionLength(123)).toBe(0);
		expect(getPrecisionLength(123456)).toBe(0);
		expect(getPrecisionLength(-1)).toBe(0);
		expect(getPrecisionLength(-123)).toBe(0);
		expect(getPrecisionLength(-123456)).toBe(0);
	});

	test('pass float', () => {
		expect(getPrecisionLength(0.1)).toBe(1);
		expect(getPrecisionLength(0.12)).toBe(2);
		expect(getPrecisionLength(0.123)).toBe(3);
		expect(getPrecisionLength(0.123456789)).toBe(9);
		expect(getPrecisionLength(-0.1)).toBe(1);
		expect(getPrecisionLength(-0.12)).toBe(2);
		expect(getPrecisionLength(-0.123)).toBe(3);
		expect(getPrecisionLength(-0.123456789)).toBe(9);
	});
});

import { isArray, isEmptyArray } from '../array';

describe('validator: array', () => {
	describe('isArray', () => {
		test('undefined null', () => {
			expect(isArray(undefined)).toBeFalsy();
			expect(isArray(null)).toBeFalsy();
		});

		test('boolean', () => {
			expect(isArray(false)).toBeFalsy();
			expect(isArray(true)).toBeFalsy();
		});

		test('number', () => {
			expect(isArray(123)).toBeFalsy();
			expect(isArray(0.3)).toBeFalsy();
			expect(isArray(10.31235)).toBeFalsy();
			expect(isArray(NaN)).toBeFalsy();
		});

		test('string', () => {
			expect(isArray('')).toBeFalsy();
			expect(isArray('abc')).toBeFalsy();
			expect(isArray(`${123}qwewer`)).toBeFalsy();
		});

		test('object', () => {
			expect(isArray({})).toBeFalsy();
			expect(isArray({ a: 1 })).toBeFalsy();
			expect(isArray({ a: 1, b: { c: 2 } })).toBeFalsy();
		});

		test('array', () => {
			expect(isArray([])).toBeTruthy();
			expect(isArray([1, 2, 3])).toBeTruthy();
			expect(isArray([{ a: 1 }, 2, [3, 4], true, null, undefined, 'abc'])).toBeTruthy();
		});
	});

	describe('isEmptyArray', () => {
		test('undefined null', () => {
			expect(() => isEmptyArray()).toThrowError();
			expect(() => isEmptyArray(undefined)).toThrowError();
			expect(() => isEmptyArray(null)).toThrowError();
		});

		test('boolean', () => {
			// @ts-ignore
			expect(() => isEmptyArray(false)).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray(true)).toThrowError();
		});

		test('number', () => {
			// @ts-ignore
			expect(() => isEmptyArray(123)).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray(0.3)).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray(10.31235)).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray(NaN)).toThrowError();
		});

		test('string', () => {
			// @ts-ignore
			expect(() => isEmptyArray('')).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray('abc')).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray(`${123}qwewer`)).toThrowError();
		});

		test('object', () => {
			// @ts-ignore
			expect(() => isEmptyArray({})).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray({ a: 1 })).toThrowError();
			// @ts-ignore
			expect(() => isEmptyArray({ a: 1, b: { c: 2 } })).toThrowError();
		});

		test('array', () => {
			expect(isEmptyArray([])).toBeTruthy();
			expect(isEmptyArray([1, 2, 3])).toBeFalsy();
			expect(isEmptyArray([{ a: 1 }, 2, [3, 4], true, null, undefined, 'abc'])).toBeFalsy();
		});
	});
});

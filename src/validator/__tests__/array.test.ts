import { isArray, isEmptyArray } from '../array';

describe('validator: array', () => {
	describe('isArray', () => {
		test('undefined null', () => {
			expect(isArray(undefined)).toBeFalsy();
			expect(isArray(null)).toBeFalsy();
		});

		test('boolean', () => {
			// @ts-ignore
			expect(isArray(false)).toBeFalsy();
			// @ts-ignore
			expect(isArray(true)).toBeFalsy();
		});

		test('number', () => {
			// @ts-ignore
			expect(isArray(123)).toBeFalsy();
			// @ts-ignore
			expect(isArray(0.3)).toBeFalsy();
			// @ts-ignore
			expect(isArray(10.31235)).toBeFalsy();
			// @ts-ignore
			expect(isArray(NaN)).toBeFalsy();
		});

		test('string', () => {
			// @ts-ignore
			expect(isArray('')).toBeFalsy();
			// @ts-ignore
			expect(isArray('abc')).toBeFalsy();
			// @ts-ignore
			expect(isArray(`${123}qwewer`)).toBeFalsy();
		});

		test('object', () => {
			// @ts-ignore
			expect(isArray({})).toBeFalsy();
			// @ts-ignore
			expect(isArray({ a: 1 })).toBeFalsy();
			// @ts-ignore
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
			// @ts-ignore
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

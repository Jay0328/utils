import { isObject, isEmptyObject } from '../object';

describe('validator: object', () => {
	describe('isObject', () => {
		test('undefined null', () => {
			expect(isObject(undefined)).toBeFalsy();
			expect(isObject(null)).toBeFalsy();
		});

		test('boolean', () => {
			expect(isObject(false)).toBeFalsy();
			expect(isObject(true)).toBeFalsy();
		});

		test('number', () => {
			expect(isObject(123)).toBeFalsy();
			expect(isObject(0.3)).toBeFalsy();
			expect(isObject(10.31235)).toBeFalsy();
			expect(isObject(NaN)).toBeFalsy();
		});

		test('string', () => {
			expect(isObject('')).toBeFalsy();
			expect(isObject('abc')).toBeFalsy();
			expect(isObject(`${123}qwewer`)).toBeFalsy();
		});

		test('array', () => {
			expect(isObject([])).toBeFalsy();
			expect(isObject([1, 2, 3])).toBeFalsy();
			expect(isObject([{ a: 1 }, 2, [3, 4], true, null, undefined, 'abc'])).toBeFalsy();
		});

		test('object', () => {
			expect(isObject({})).toBeTruthy();
			expect(isObject({ a: 1 })).toBeTruthy();
			expect(isObject({ a: 1, b: { c: 2 } })).toBeTruthy();
		});
	});

	describe('isEmptyObject', () => {
		test('undefined null', () => {
			expect(() => isEmptyObject()).toThrowError();
			expect(() => isEmptyObject(undefined)).toThrowError();
			expect(() => isEmptyObject(null)).toThrowError();
		});

		test('boolean', () => {
			//	@ts-ignore
			expect(() => isEmptyObject(false)).toThrowError();
			//	@ts-ignore
			expect(() => isEmptyObject(true)).toThrowError();
		});

		test('number', () => {
			//	@ts-ignore
			expect(() => isEmptyObject(123)).toThrowError();
			//	@ts-ignore
			expect(() => isEmptyObject(0.3)).toThrowError();
			//	@ts-ignore
			expect(() => isEmptyObject(10.31235)).toThrowError();
			//	@ts-ignore
			expect(() => isEmptyObject(NaN)).toThrowError();
		});

		test('string', () => {
			//	@ts-ignore
			expect(() => isEmptyObject('')).toThrowError();
			//	@ts-ignore
			expect(() => isEmptyObject('abc')).toThrowError();
			//	@ts-ignore
			expect(() => isEmptyObject(`${123}qwewer`)).toThrowError();
		});

		test('array', () => {
			expect(() => isEmptyObject([])).toThrowError();
			expect(() => isEmptyObject([1, 2, 3])).toThrowError();
			expect(() => isEmptyObject([{ a: 1 }, 2, [3, 4], true, null, undefined, 'abc'])).toThrowError();
		});

		test('object', () => {
			expect(isEmptyObject({})).toBeTruthy();
			expect(isEmptyObject({ a: 1 })).toBeFalsy();
			expect(isEmptyObject({ a: 1, b: { c: 2 } })).toBeFalsy();
		});
	});
});

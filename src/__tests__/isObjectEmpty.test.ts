import { isObjectEmpty } from '../isObjectEmpty';

describe('isObjectEmpty', () => {
	test('undefined null', () => {
		//	@ts-ignore
		expect(() => isObjectEmpty()).toThrowError();
		expect(() => isObjectEmpty(undefined)).toThrowError();
		expect(() => isObjectEmpty(null)).toThrowError();
	});

	test('boolean', () => {
		//	@ts-ignore
		expect(() => isObjectEmpty(false)).toThrowError();
		//	@ts-ignore
		expect(() => isObjectEmpty(true)).toThrowError();
	});

	test('number', () => {
		//	@ts-ignore
		expect(() => isObjectEmpty(123)).toThrowError();
		//	@ts-ignore
		expect(() => isObjectEmpty(0.3)).toThrowError();
		//	@ts-ignore
		expect(() => isObjectEmpty(10.31235)).toThrowError();
		//	@ts-ignore
		expect(() => isObjectEmpty(NaN)).toThrowError();
	});

	test('string', () => {
		//	@ts-ignore
		expect(() => isObjectEmpty('')).toThrowError();
		//	@ts-ignore
		expect(() => isObjectEmpty('abc')).toThrowError();
		//	@ts-ignore
		expect(() => isObjectEmpty(`${123}qwewer`)).toThrowError();
	});

	test('array', () => {
		expect(() => isObjectEmpty([])).toThrowError();
		expect(() => isObjectEmpty([1, 2, 3])).toThrowError();
		expect(() => isObjectEmpty([{ a: 1 }, 2, [3, 4], true, null, undefined, 'abc'])).toThrowError();
	});

	test('object', () => {
		expect(isObjectEmpty({})).toBeTruthy();
		expect(isObjectEmpty({ a: 1 })).toBeFalsy();
		expect(isObjectEmpty({ a: 1, b: { c: 2 } })).toBeFalsy();
	});
});

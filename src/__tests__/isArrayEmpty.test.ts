import { isArrayEmpty } from '../isArrayEmpty';

describe('isArrayEmpty', () => {
  test('undefined null', () => {
    // @ts-ignore
    expect(() => isArrayEmpty()).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(undefined)).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(null)).toThrowError();
  });

  test('boolean', () => {
    // @ts-ignore
    expect(() => isArrayEmpty(false)).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(true)).toThrowError();
  });

  test('number', () => {
    // @ts-ignore
    expect(() => isArrayEmpty(123)).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(0.3)).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(10.31235)).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(NaN)).toThrowError();
  });

  test('string', () => {
    // @ts-ignore
    expect(() => isArrayEmpty('')).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty('abc')).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty(`${123}qwewer`)).toThrowError();
  });

  test('object', () => {
    // @ts-ignore
    expect(() => isArrayEmpty({})).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty({ a: 1 })).toThrowError();
    // @ts-ignore
    expect(() => isArrayEmpty({ a: 1, b: { c: 2 } })).toThrowError();
  });

  test('array', () => {
    expect(isArrayEmpty([])).toBeTruthy();
    expect(isArrayEmpty([1, 2, 3])).toBeFalsy();
    expect(isArrayEmpty([{ a: 1 }, 2, [3, 4], true, null, undefined, 'abc'])).toBeFalsy();
  });
});

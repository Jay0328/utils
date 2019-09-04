import { isObject } from '../isObject';

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

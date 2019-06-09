/**
 * @module validator
 */
import { isObject } from './isObject';

export function isObjectEmpty(arg: object): boolean {
	if (!isObject(arg)) {
		throw new Error('arg should be object.');
	}

	return Object.keys(arg).length === 0;
}

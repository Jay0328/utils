/**
 * @module validator
 */

export function isObjectEmpty(arg: object): boolean {
	return Object.keys(arg).length === 0;
}

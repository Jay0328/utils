/**
 * @module validator.array
 */

/**
 * native method
 */
export const isArray = Array.isArray;

/**
 * If argument is not `Array`, it will throw error.
 */
export function isEmptyArray(arg?: any[]): boolean {
	if (!isArray(arg)) {
		throw new Error('arg should be array.');
	}

	return arg.length === 0;
}

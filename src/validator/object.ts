/**
 * @module validator.object
 */

/**
 * @param arg argument will be tested if it is object or not.
 */
export function isObject(arg?: any): arg is object {
	return !!(
		arg &&
		typeof arg === 'object' &&
		!(arg instanceof Array)
	);
}

/**
 * If argument is not `Object`, it will throw error.
 */
export function isEmptyObject(arg?: object): boolean {
	if (!isObject(arg)) {
		throw new Error('arg should be object.');
	}

	return Object.keys(arg).length === 0;
}

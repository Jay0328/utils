/**
 * @module validator
 */

/**
 * @param arg argument will be tested if it is object or not.
 */
export function isObject(arg: any): arg is object {
	return !!(
		arg &&
		typeof arg === 'object' &&
		!(arg instanceof Array)
	);
}

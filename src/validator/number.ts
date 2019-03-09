/**
 * @module validator.number
 */

/**
 * @param arg argument will be tested if it is integer or not.
 * @param signs 
 */
export function isInteger(arg: number | string, signs: '+-' | '+' | '-' = '+-'): boolean {
	return new RegExp(`^(0|[${signs}]?[1-9]\\d*)$`).test(`${arg}`);
}

/**
 * @param arg argument will be tested if it is numeric or not.
 */
export function isNumeric(arg: number | string): boolean {
	return !Number.isNaN(parseFloat(`${arg}`)) && isFinite(arg as number);
}

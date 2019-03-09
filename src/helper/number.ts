/**
 * @module helper.number
 */

/**
 * get length of precisions
 * 
 * ```ts
 * getPrecisionLength(1.123) === 3
 * ```
 */
export function getPrecisionLength(arg: number): number {
	if (typeof arg !== 'number') {
		throw new Error('parameter should be number');
	}

	const precisions = `${arg}`.split('.')[1];

	if (precisions === undefined) {
		return 0;
	}

	return precisions.length;
}

/**
 * @param arg source number.
 * @param precisions length of precisions.
 * 
 * ```ts
 * formatPrecision(1.1234, 2) === 1.12
 * ```
 */
export function formatPrecision(arg: number, precisions: number): number {
	if (typeof arg !== 'number' || typeof precisions !== 'number') {
		throw new Error('both number and precisions should be number');
	}

	const size = 10 ** precisions;
	return Math.round(arg * size) / size;
}

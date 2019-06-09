/**
 * @module helper
 */

/**
 * get length of precisions
 * 
 * ```ts
 * getPrecisionLength(1.123) === 3
 * ```
 */
export function getPrecisionLength(arg: number): number {
	const precisions = `${arg}`.split('.')[1];

	if (precisions === undefined) {
		return 0;
	}

	return precisions.length;
}

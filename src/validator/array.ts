export type IsArray = <T>(source: T[]) => source is T[];
export const isArray: IsArray = <T>(source: T[]): source is T[] => Array.isArray(source);

export type IsEmptyArray = <T>(source: T[]) => boolean;
export const isEmptyArray: IsEmptyArray = <T>(source: T[]) => {
	if (!isArray<T>(source)) {
		throw new Error('source should be array.');
	}

	return source.length === 0;
};

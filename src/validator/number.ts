export type IsInteger = (number: number | string, signs?: '+-' | '+' | '-') => boolean;
export const isInteger: IsInteger = (number, signs = '+-') => (
	new RegExp(`^(0|[${signs}]?[1-9]\\d*)$`).test(`${number}`)
);

export type IsNumeric = (number: number | string) => boolean;
export const isNumeric: IsNumeric = number => (
	!Number.isNaN(parseFloat(`${number}`)) && isFinite(number as number)
);

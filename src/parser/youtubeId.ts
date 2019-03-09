/**
 * @module parser
 */

/**
 * get youtubeId from url.
 * @param arg url
 */
export default function youtubeIdParser(arg: string): string {
	const match = arg.match(
		/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
	);

	if (match && match[7].length === 11) {
		return match[7];
	}

	return '';
}

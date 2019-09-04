/**
 * get youtubeId from url.
 */
export function parseYoutubeId(url: string): string {
  const match = url.match(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  );

  if (match && match[7].length === 11) {
    return match[7];
  }

  return '';
}

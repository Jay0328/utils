/**
 * strip html by document.
 */
export function stripHtml(html: string): string {
  if (!html) {
    return '';
  }

  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

/**
 * strip html by regexp
 */
export function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .trim();
}

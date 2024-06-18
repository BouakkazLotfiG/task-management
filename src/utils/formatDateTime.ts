export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);

  // Options for formatting date and time
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',

    hour12: true,
  };

  return date.toLocaleString(undefined, options);
}

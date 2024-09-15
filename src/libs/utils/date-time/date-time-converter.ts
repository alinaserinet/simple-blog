// generate readable date time with parsing unix timestamp
export const unixConverter = (unix: number) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return dateTimeFormat.format(unix * 1000);
};
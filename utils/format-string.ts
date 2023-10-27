export function formatString(count: number | null | undefined, strings: string) {
  const suffix = strings.split(',');
  if (count === null || count === undefined) {
      return `${count} ${suffix[0]}`;
  } else if (count === 1) {
      return `${count} ${suffix[1]}`;
  } else if (count >= 2 && count <= 4) {
      return `${count} ${suffix[2]}`;
  } else {
      return `${count} ${suffix[0]}`;
  }
}

// Polish plural forms, e.g. pluralize(5, "gra", "gry", "gier") -> "gier"
export const pluralize = (
  count: number,
  one: string,
  few: string,
  many: string,
) => {
  if (count === 1) return one;
  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 12 || count % 100 > 14)
  ) {
    return few;
  }
  return many;
};

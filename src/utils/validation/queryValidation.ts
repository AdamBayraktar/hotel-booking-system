const QUERY_REGEX =
  /^\s*Availability\(\s*([a-zA-Z0-9]+)\s*,\s*(20\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(-20\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))?)\s*,\s*([a-zA-Z0-9]+)\s*\)\s*$/;

export function isQueryValid(query: string): boolean {
  return QUERY_REGEX.test(query);
}

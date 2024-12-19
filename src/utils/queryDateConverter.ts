const DATE_REGEX = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

/**
 * Convert query date string to Date object
 * The date string is in the format "YYYYMMDD-YYYYMMDD" or "YYYYMMDD"
 * If the date string is in the format "YYYYMMDD", the start date and end date will be the same
 * @param date The date string in the format "YYYYMMDD-YYYYMMDD" or "YYYYMMDD"
 * @returns
 */
export function convertQueryDateToDate(date: string): [Date, Date] {
  let [startDateStr, endDateStr] = splitDates(date);
  const startDate = parseDates(formatDate(startDateStr));
  const endDate = parseDates(formatDate(endDateStr));
  if (startDate > endDate) throw new Error("Invalid date range.");
  return [startDate, endDate];
}

/**
 * Convert JSON date string to Date object
 * function is used to convert the date string from the JSON file to a Date object
 * Rise error if the date string is not in the format "YYYYMMDD"
 * @param date The date string in the format "YYYYMMDD"
 * @returns Date object
 */
export function convertJSONDateToDate(date: string): Date {
  if (!DATE_REGEX.test(date)) throw new Error("Invalid JSON date format.");
  return parseDates(formatDate(date));
}

function splitDates(dates: string): [string, string] {
  let [startDateStr, endDateStr] = dates.split("-");
  if (!endDateStr) endDateStr = startDateStr;
  return [startDateStr, endDateStr];
}

/**
 * Format date string from "YYYYMMDD" to "YYYY-MM-DD"
 */
function formatDate(date: string): string {
  return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
}

/**
 * Parse date string "YYYY-MM-DD" to Date object
 */
function parseDates(date: string): Date {
  const parsedDate = new Date(date);
  return parsedDate;
}

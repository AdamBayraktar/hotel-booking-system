import {
  convertQueryDateToDate,
  convertJSONDateToDate,
} from "@utils/queryDateConverter";

describe("Query Date Converter", () => {
  test("should convert single date to [startDate, endDate]", () => {
    const [startDate, endDate] = convertQueryDateToDate("20240901");
    expect(startDate).toEqual(new Date("2024-09-01"));
    expect(endDate).toEqual(new Date("2024-09-01"));
  });

  test("should convert date range to [startDate, endDate]", () => {
    const [startDate, endDate] = convertQueryDateToDate("20240901-20240903");
    expect(startDate).toEqual(new Date("2024-09-01"));
    expect(endDate).toEqual(new Date("2024-09-03"));
  });

  test("should throw error for invalid date range", () => {
    expect(() => convertQueryDateToDate("20240903-20240901")).toThrow(
      "Invalid date range."
    );
  });

  test("should convert JSON date to Date object", () => {
    const date = convertJSONDateToDate("20240901");
    expect(date).toEqual(new Date("2024-09-01"));
  });

  test("should throw error for invalid JSON date format", () => {
    expect(() => convertJSONDateToDate("2024/09/01")).toThrow(
      "Invalid JSON date format."
    );
  });
});

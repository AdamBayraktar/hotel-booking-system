import { isMainCommandValid } from "@utils/validation/mainCommandValidation";

describe("Main Command Validation", () => {
  test("should validate correct command format", () => {
    const input = { h: "./hotels.json", b: "./bookings.json" };
    expect(isMainCommandValid(input)).toBe(true);
  });

  describe("should invalidate command with missing flags", () => {
    test("when hotel flag is missing", () => {
      const input = { h: "", b: "./bookings.json" };
      expect(isMainCommandValid(input)).toBe(false);
    });
    test("when booking flag is missing", () => {
      const input = { h: "./hotels.json", b: "" };
      expect(isMainCommandValid(input)).toBe(false);
    });
  });

  test("should invalidate command with incorrect path format", () => {
    const input = { h: "hotels.txt", b: "./bookings.json" };
    expect(isMainCommandValid(input)).toBe(false);
  });

  describe("should invalidate command with multiple values for a flag", () => {
    test("when passed multiple values to hotel flag", () => {
      const input = { h: ["./hotels.json", "21", "sad"], b: "./bookings.json" };
      expect(isMainCommandValid(input)).toBe(false);
    });
    test("when passed multiple values to books flag", () => {
      const input = { h: "./hotels.json", b: ["./bookings.json", "dsa"] };
      expect(isMainCommandValid(input)).toBe(false);
    });
  });
});

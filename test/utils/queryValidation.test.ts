import { isQueryValid } from "@utils/validation/queryValidation";

describe("Query Validation", () => {
  test("should validate correct query format", () => {
    const query = "Availability(H1, 20240901-20240903, SGL)";
    expect(isQueryValid(query)).toBe(true);
  });

  test("should invalidate incorrect query format", () => {
    const query = "InvalidQuery";
    expect(isQueryValid(query)).toBe(false);
  });
});

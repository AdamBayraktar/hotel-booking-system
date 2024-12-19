import { Booking } from "@classes/Booking.class";

describe("Booking Class", () => {
  test("should create a booking instance", () => {
    const booking = new Booking(
      "H1",
      new Date("2024-09-01"),
      new Date("2024-09-03"),
      "SGL",
      "100"
    );
    expect(booking.hotelId).toBe("H1");
    expect(booking.arrival).toEqual(new Date("2024-09-01"));
    expect(booking.departure).toEqual(new Date("2024-09-03"));
    expect(booking.roomType).toBe("SGL");
    expect(booking.roomRate).toBe("100");
  });

  test("should throw error if arrival date is after departure date", () => {
    expect(
      () =>
        new Booking(
          "H1",
          new Date("2024-09-03"),
          new Date("2024-09-01"),
          "SGL",
          "100"
        )
    ).toThrow(
      "Invalid booking date: The arrival booking date is after the departure booking date."
    );
  });
});

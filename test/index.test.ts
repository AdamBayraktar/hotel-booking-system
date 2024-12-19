import { HotelFactory } from "@factories/HotelFactory";
import { BookingFactory } from "@factories/BookingFactory";
import { checkAvailability } from "@utils/checkAvailability";
import { Hotel } from "@classes/Hotel.class";
import { Booking } from "@classes/Booking.class";

describe("Integration Tests", () => {
  let hotels: Hotel[], bookings: Booking[];

  beforeAll(() => {
    const hotelsJson = [
      {
        id: "H1",
        name: "Hotel One",
        roomTypes: [{ code: "SGL", description: "Single Room" }],
        rooms: [{ roomType: "SGL", roomId: "101" }],
      },
    ];
    const bookingsJson = [
      {
        hotelId: "H1",
        arrival: "20240901",
        departure: "20240902",
        roomType: "SGL",
        roomRate: "100",
      },
    ];

    hotels = HotelFactory.createHotels(hotelsJson);
    bookings = BookingFactory.createBookings(bookingsJson);
  });

  test("should return available rooms for valid query", () => {
    const result = checkAvailability(
      "Availability(H1, 20240903, SGL)",
      hotels,
      bookings
    );
    expect(result).toBe(1);
  });

  test("should throw error for invalid query format", () => {
    expect(() => checkAvailability("InvalidQuery", hotels, bookings)).toThrow(
      "Invalid query format."
    );
  });
});

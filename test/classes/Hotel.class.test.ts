import { Hotel } from "@classes/Hotel.class";
import { Room } from "@classes/Room.class";
import { RoomType } from "@classes/RoomType.class";
import { Booking } from "@classes/Booking.class";

describe("Hotel Class", () => {
  let hotel: Hotel;
  let bookings: Booking[];

  beforeEach(() => {
    const roomTypes = [
      new RoomType("SGL", "Single"),
      new RoomType("DBL", "Double"),
    ];
    const rooms = [
      new Room("SGL", "101"),
      new Room("DBL", "201"),
      new Room("DBL", "202"),
    ];
    hotel = new Hotel("H1", "Test Hotel", roomTypes, rooms);

    bookings = [
      new Booking(
        "H1",
        new Date("2024-09-01"),
        new Date("2024-09-02"),
        "SGL",
        "100"
      ),
      new Booking(
        "H1",
        new Date("2024-09-01"),
        new Date("2024-09-01"),
        "SGL",
        "100"
      ),
      new Booking(
        "H1",
        new Date("2024-09-01"),
        new Date("2024-09-01"),
        "SGL",
        "100"
      ),
      new Booking(
        "H1",
        new Date("2024-09-01"),
        new Date("2024-09-01"),
        "SGL",
        "100"
      ),
      new Booking(
        "H1",
        new Date("2024-09-01"),
        new Date("2024-09-03"),
        "DBL",
        "150"
      ),
    ];
  });

  describe("should return total available rooms", () => {
    test("One less when there is one reservation ", () => {
      const availableRooms = hotel.getAvailableRooms(
        bookings,
        "DBL",
        new Date("2024-09-02"),
        new Date("2024-09-03")
      );
      expect(availableRooms).toBe(1); // 2 rooms, 1 booked
    });
    test("Total rooms number when there are no reservations", () => {
      const availableRooms = hotel.getAvailableRooms(
        bookings,
        "DBL",
        new Date("2024-09-22"),
        new Date("2024-09-23")
      );
      expect(availableRooms).toBe(2); // 2 rooms, 0 booked
    });
    test("Negative number when there is overbooking", () => {
      const availableRooms = hotel.getAvailableRooms(
        bookings,
        "SGL",
        new Date("2024-09-01"),
        new Date("2024-09-23")
      );
      expect(availableRooms).toBe(-3); // 1 room, 4 booked
    });
    test("0 when there is no such a room", () => {
      const availableRooms = hotel.getAvailableRooms(
        bookings,
        "No type",
        new Date("2024-09-01"),
        new Date("2024-09-23")
      );
      expect(availableRooms).toBe(0); // 1 room, 4 booked
    });
  });

  // test("should throw error for invalid room type", () => {
  //   expect(() =>
  //     hotel.getAvailableRooms(bookings, "TRPL", new Date(), new Date())
  //   ).toThrow("Invalid room type");
  // });
});

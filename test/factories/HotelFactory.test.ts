import { HotelFactory } from "@factories/HotelFactory";
import { Hotel } from "@classes/Hotel.class";

describe("Hotel Factory", () => {
  test("should create a single hotel from data", () => {
    const data = {
      id: "H1",
      name: "Hotel One",
      roomTypes: [{ code: "SGL", description: "Single Room" }],
      rooms: [{ roomType: "SGL", roomId: "101" }],
    };

    const hotel = HotelFactory.createHotel(data);
    expect(hotel).toBeInstanceOf(Hotel);
    expect(hotel.name).toBe("Hotel One");
  });

  test("should create multiple hotels from data array", () => {
    const data = [
      {
        id: "H1",
        name: "Hotel One",
        roomTypes: [{ code: "SGL", description: "Single Room" }],
        rooms: [{ roomType: "SGL", roomId: "101" }],
      },
      {
        id: "H2",
        name: "Hotel Two",
        roomTypes: [{ code: "DBL", description: "Double Room" }],
        rooms: [{ roomType: "DBL", roomId: "201" }],
      },
    ];

    const hotels = HotelFactory.createHotels(data);
    expect(hotels.length).toBe(2);
    expect(hotels[0].name).toBe("Hotel One");
    expect(hotels[1].name).toBe("Hotel Two");
  });
});

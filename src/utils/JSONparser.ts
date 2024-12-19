import fs from "fs";
import { BookingType } from "@myTypes/Booking.type";
import { HotelType } from "@myTypes/Hotel.type";

function parse(filePath: string, type: "Hotels" | "Bookings"): any[] {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    throw new Error(`${type} file is not a valid JSON file: ${filePath}`);
  }
}

export function parseHotels(filePath: string): HotelType[] {
  let hotels: HotelType[] = [];
  hotels = parse(filePath, "Hotels");
  checkHotelStructure(hotels);
  checkDuplicateHotelIds(hotels);
  return hotels;
}

export function parseBookings(filePath: string): BookingType[] {
  let bookings: BookingType[] = [];
  bookings = parse(filePath, "Bookings");
  checkBookingStructure(bookings);
  return bookings;
}

function checkHotelStructure(hotels: HotelType[]) {
  if (hotels.length === 0) throw new Error("No hotels found.");
  hotels.forEach((hotel, index) => {
    if (!hotel.id || !hotel.name || !hotel.roomTypes || !hotel.rooms) {
      throw new Error(
        `Invalid hotel structure at index ${index}: ${JSON.stringify(hotel)}`
      );
    }
  });
}

function checkBookingStructure(bookings: BookingType[]) {
  bookings.forEach((booking, index) => {
    if (
      !booking.hotelId ||
      !booking.arrival ||
      !booking.departure ||
      !booking.roomType ||
      !booking.roomRate
    ) {
      throw new Error(
        `Invalid booking structure at index ${index}: ${JSON.stringify(
          booking
        )}`
      );
    }
  });
}

function checkDuplicateHotelIds(hotels: HotelType[]) {
  const hotelIds = hotels.map((hotel) => hotel.id);
  const uniqueHotelIds = new Set(hotelIds);
  if (hotelIds.length !== uniqueHotelIds.size) {
    throw new Error("Duplicate hotel IDs found.");
  }
}

import { parseHotels, parseBookings } from "@utils/JSONparser";
import { HotelFactory } from "@factories/HotelFactory";
import { BookingFactory } from "@factories/BookingFactory";
import { Hotel } from "@classes/Hotel.class";
import { Booking } from "@classes/Booking.class";

export function setup(args: { hotels: string; bookings: string }): {
  hotels: Hotel[];
  bookings: Booking[];
} {
  const hotelsJson = parseHotels(args.hotels);
  const bookingsJson = parseBookings(args.bookings);
  const hotels = HotelFactory.createHotels(hotelsJson);
  const bookings = BookingFactory.createBookings(bookingsJson);
  return { hotels, bookings };
}

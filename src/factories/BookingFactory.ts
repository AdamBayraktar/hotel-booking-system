import { Booking } from "@classes/Booking.class";
import { convertJSONDateToDate } from "@utils/queryDateConverter";
import { BookingType } from "@myTypes/Booking.type";

export class BookingFactory {
  static createBooking(data: BookingType): Booking {
    return new Booking(
      data.hotelId,
      convertJSONDateToDate(data.arrival),
      convertJSONDateToDate(data.departure),
      data.roomType,
      data.roomRate
    );
  }

  static createBookings(data: BookingType[]): Booking[] {
    return data.map(BookingFactory.createBooking);
  }
}

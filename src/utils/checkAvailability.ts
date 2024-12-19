import { isQueryValid } from "./validation/queryValidation";
import { convertQueryDateToDate } from "./queryDateConverter";
import { Hotel } from "../classes/Hotel.class";
import { Booking } from "../classes/Booking.class";

export function checkAvailability(
  query: string,
  hotels: Hotel[],
  bookings: Booking[]
): number {
  let result = 0;

  // check query format
  if (!isQueryValid(query)) throw new Error("Invalid query format.");

  // get properties from query
  let [hotelId, dates, roomType] = query.split("(")[1].split(")")[0].split(",");
  [hotelId, dates, roomType] = trimStringList([hotelId, dates, roomType]);
  const [startDateStr, endDateStr] = convertQueryDateToDate(dates);

  // get available rooms from hotel with specified id
  hotels.forEach((hotel) => {
    if (hotel.id === hotelId) {
      result += hotel.getAvailableRooms(
        bookings,
        roomType,
        startDateStr,
        endDateStr
      );
    }
  });
  return result;
}

// remove leading and trailing whitespaces from a list of strings
function trimStringList(list: string[]): string[] {
  return list.map((item) => item.trim());
}

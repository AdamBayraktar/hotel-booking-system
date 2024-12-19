export class Booking {
  hotelId: string;
  arrival: Date;
  departure: Date;
  roomType: string;
  roomRate: string;

  // convert arrival and departure to Date
  constructor(
    hotelId: string,
    arrival: Date,
    departure: Date,
    roomType: string,
    roomRate: string
  ) {
    this.hotelId = hotelId;
    this.arrival = arrival;
    this.departure = departure;
    this.roomType = roomType;
    this.roomRate = roomRate;
    if (this.arrival > this.departure)
      throw new Error(
        "Invalid booking date: The arrival booking date is after the departure booking date."
      );
  }
}

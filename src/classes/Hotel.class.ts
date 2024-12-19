import { RoomType } from "@classes/RoomType.class";
import { Room } from "@classes/Room.class";
import { Booking } from "@classes/Booking.class";

export class Hotel {
  id: string;
  name: string;
  roomTypes: RoomType[];
  rooms: Room[];

  constructor(id: string, name: string, roomTypes: RoomType[], rooms: Room[]) {
    this.id = id;
    this.name = name;
    this.roomTypes = roomTypes;
    this.rooms = rooms;
  }
  public getAvailableRooms(
    bookings: Booking[],
    roomType: string,
    startDate: Date,
    endDate: Date
  ): number {
    const occupiedRooms = this.getOccupiedRooms(
      bookings,
      roomType,
      startDate,
      endDate
    );
    return this.getTotalRooms(roomType) - occupiedRooms;
  }

  private getTotalRooms(roomType: string): number {
    return this.isRoomTypeValid(roomType)
      ? this.rooms.filter((r) => r.roomType === roomType).length
      : 0;
  }

  private isRoomTypeValid(roomType: string): boolean {
    return this.roomTypes.some((rt) => rt.code === roomType);
  }

  private getOccupiedRooms(
    bookings: Booking[],
    roomType: string,
    startDate: Date,
    endDate: Date
  ): number {
    return bookings.filter(
      (booking) =>
        booking.hotelId === this.id &&
        booking.roomType === roomType &&
        ((startDate >= booking.arrival && startDate <= booking.departure) ||
          (endDate >= booking.arrival && endDate <= booking.departure))
    ).length;
  }
}

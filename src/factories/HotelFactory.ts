import { Hotel } from "@classes/Hotel.class";
import { Room } from "@classes/Room.class";
import { RoomType } from "@classes/RoomType.class";
import { HotelType } from "@myTypes/Hotel.type";

export class HotelFactory {
  static createHotel(data: HotelType): Hotel {
    return new Hotel(
      data.id,
      data.name,
      data.roomTypes.map((rt: any) => new RoomType(rt.code, rt.description)),
      data.rooms.map((room: any) => new Room(room.roomType, room.roomId))
    );
  }

  static createHotels(data: HotelType[]): Hotel[] {
    return data.map(HotelFactory.createHotel);
  }
}

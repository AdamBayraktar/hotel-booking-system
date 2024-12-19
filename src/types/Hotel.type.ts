export type HotelType = {
  id: string;
  name: string;
  roomTypes: { code: string; description: string }[];
  rooms: { roomType: string; roomId: string }[];
};

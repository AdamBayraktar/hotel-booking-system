import { Room } from "@classes/Room.class";

describe("Room Class", () => {
  test("should create a room instance", () => {
    const room = new Room("SGL", "101");
    expect(room.roomType).toBe("SGL");
    expect(room.roomId).toBe("101");
  });
});

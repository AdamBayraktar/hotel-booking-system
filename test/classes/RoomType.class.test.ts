import { RoomType } from "@classes/RoomType.class";

describe("RoomType Class", () => {
  test("should create a room type instance", () => {
    const roomType = new RoomType("SGL", "Single Room");
    expect(roomType.code).toBe("SGL");
    expect(roomType.description).toBe("Single Room");
  });
});

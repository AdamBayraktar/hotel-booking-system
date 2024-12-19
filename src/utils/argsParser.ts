import minimist from "minimist";

const getArgs = (): {
  hotels: string;
  bookings: string;
  h: string;
  b: string;
} => {
  const args = minimist(process.argv.slice(2), {
    alias: { hotels: "h", bookings: "b" },
    string: ["hotels", "bookings"],
    default: { hotels: "", bookings: "" },
  });

  return {
    hotels: args.hotels,
    bookings: args.bookings,
    h: args.h,
    b: args.b,
  };
};

export { getArgs };

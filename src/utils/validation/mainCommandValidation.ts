// ([a-zA-Z]:\\|\.\/|\.\.\/)?    # Optional drive or relative path
// ([\w\-]+\/)*                  # Folder structure
// [\w\-]+\.json$                # JSON file name
const PATH_REGEX = /^([a-zA-Z]:\\|\.\/|\.\.\/)?([\w\-]+\/)*[\w\-]+\.json$/;

export function isMainCommandValid(input: {
  h: string | string[];
  b: string | string[];
}): boolean {
  const hotels = input.h;
  const bookings = input.b;
  return (
    isFlagCommandValid(hotels, "hotels") &&
    isFlagCommandValid(bookings, "bookings")
  );
}

function isFlagCommandValid(command: string | string[], flag: string): boolean {
  // If the command is an array, then it is invalid. Only happens when the same flag is used multiple times.
  if (typeof command !== "string") {
    console.error("Invalid command: Multiple values for the same flag.");
    return false;
  }
  if (command.length === 0) {
    console.error(
      "Invalid command: Missing value for flag --hotels and/or --bookings."
    );
    return false;
  }
  if (!PATH_REGEX.test(command)) {
    console.error(`Invalid command: Invalid path for flag --${flag}.`);
    return false;
  }
  return true;
}

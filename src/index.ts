import { checkAvailability } from "@utils/checkAvailability";
import { entryMessage, warnProperUsage } from "@utils/messages";
import readline from "readline";
import { isMainCommandValid } from "@utils/validation/mainCommandValidation";
import { getArgs } from "@utils/argsParser";
import { setup } from "./setup";

const args = getArgs();

if (!isMainCommandValid(args)) {
  warnProperUsage();
  process.exit(1);
}

const { hotels, bookings } = setup(args);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entryMessage();
rl.on("line", (input) => {
  // exit if input is empty
  if (!input.trim()) {
    rl.close();
  } else {
    try {
      const result = checkAvailability(input, hotels, bookings);
      // green color for result then reset color
      console.log("\x1b[32m%s\x1b[0m", `Result: ${result}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      entryMessage();
    }
  }
});

export function entryMessage() {
  console.log();
  console.log(`Enter queries in the format: 
        Availability(H1, 20240901, SGL)
    or
        Availability(H1, 20240901-20240903, SGL)`);
  console.warn("Enter an empty line or press Ctrl+C to exit.");
  console.log();
}

export function warnProperUsage() {
  console.warn(
    `Usage: 
        myapp --hotels <hotels.json> --bookings <bookings.json>
    or
        myapp -h <hotels.json> -b <bookings.json>`
  );
}

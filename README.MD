# Hotel Room Availability Checker

## Description

This project is a command-line application that previews hotel room availability and reservations. It processes data from JSON files containing hotel and booking information, allowing users to query room availability for specific hotels, room types, and date ranges.

The application was designed to demonstrate coding skills for a technical challenge and is implemented in TypeScript for type safety and maintainability.

---

## Features

- **Load Data**: Reads hotel and booking data from JSON files.
- **Room Availability Query**: Users can check availability for specific hotels, room types, and date ranges.
- **Interactive Console**: The application processes commands interactively until an empty line is entered.
- **Accurate Date Handling**: Considers overlapping bookings and date ranges to calculate availability.
- **Overbooking Support**: Displays negative values to indicate overbooked rooms.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/AdamBayraktar/hotel-booking-system.git
   cd hotel-booking-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Command

Run the program with the following command:

```bash
npx tsx src/index.ts --hotels <hotels.json> --bookings <bookings.json>
```

or

```bash
npx tsx src/index.ts -h <hotels.json> -b <bookings.json>
```

### Example

```bash
npx tsx src/index.ts --hotels data/hotels.json --bookings data/bookings.json
```

### Interactive Queries

After running the program, enter queries in the following format:

```text
Availability(<hotelId>, <startDate>, <roomType>)
Availability(<hotelId>, <startDate>-<endDate>, <roomType>)
```

- `<hotelId>`: ID of the hotel (e.g., `H1`)
- `<startDate>`: Start date in `yyyyMMdd` format (e.g., `20240901`)
- `<endDate>`: (Optional) End date in `yyyyMMdd` format
- `<roomType>`: Room type code (e.g., `SGL` or `DBL`)

**Example Input:**

```text
Availability(H1, 20240901, SGL)
Availability(H1, 20240901-20240903, DBL)
```

**Example Output:**

```text
Result: 2
Result: 1
```

To exit the program, press Enter on a blank line.

---

## File Structure

```plaintext
hotel-booking-system/
├── src/
│   ├── classes/
│   │   ├── Booking.class.ts
│   │   ├── Hotel.class.ts
│   │   ├── Room.class.ts
│   │   ├── RoomType.class.ts
│   │
│   ├── factories/
│   │   ├── BookingFactory.ts
│   │   ├── HotelFactory.ts
│   │
│   ├── types/
│   │   ├── Booking.type.ts
│   │   ├── Hotel.type.ts
│   │
│   ├── utils/
│   │   ├── validation/
│   │   │   ├── mainCommandValidation.ts
│   │   │   ├── queryValidation.ts
│   │   ├── argsParser.ts
│   │   ├── checkAvailability.ts
│   │   ├── JSONparser.ts
│   │   ├── messages.ts
│   │   ├── queryDateConverter.ts
│   │
│   ├── setup.ts
│   ├── index.ts
│
├── tests/
│   ├── classes/
│   │   ├── Booking.class.test.ts
│   │   ├── Hotel.class.test.ts
│   │   ├── Room.class.test.ts
│   │   ├── RoomType.class.test.ts
│   │
│   ├── factories/
│   │   ├── BookingFactory.test.ts
│   │   ├── HotelFactory.test.ts
│   │
│   ├── utils/
│   │   ├── JSONparser.test.ts
│   │   ├── argsParser.test.ts
│   │   ├── checkAvailability.test.ts
│   │   ├── queryDateConverter.test.ts
│   │   ├── validation/
│   │   │   ├── mainCommandValidation.test.ts
│   │   │   ├── queryValidation.test.ts
│   │
│   ├── index.test.ts
│
├── data/
│   ├── hotels.json
│   ├── bookings.json
│
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
└── README.MD
├── tsconfig.json
```

---

## Examples

### Input

`hotels.json`:

```json
[
  {
    "id": "H1",
    "name": "Hotel California",
    "roomTypes": [
      { "code": "SGL", "description": "Single Room" },
      { "code": "DBL", "description": "Double Room" }
    ],
    "rooms": [
      { "roomType": "SGL", "roomId": "101" },
      { "roomType": "SGL", "roomId": "102" },
      { "roomType": "DBL", "roomId": "201" },
      { "roomType": "DBL", "roomId": "202" }
    ]
  }
]
```

`bookings.json`:

```json
[
  {
    "hotelId": "H1",
    "arrival": "20240901",
    "departure": "20240903",
    "roomType": "DBL",
    "roomRate": "Prepaid"
  },
  {
    "hotelId": "H1",
    "arrival": "20240902",
    "departure": "20240905",
    "roomType": "SGL",
    "roomRate": "Standard"
  }
]
```

### Queries

```text
Availability(H1, 20240901, SGL)
Availability(H1, 20240901-20240903, DBL)
```

### Output

```text
2
1
```

---

## Development

### Testing

Run unit tests (if implemented):

```bash
npm test
```

---

## Notes

- Keep the solution simple and focus on clarity and maintainability.
- Follow best practices, but avoid unnecessary frameworks or advanced features.
- Details count

---

## License

This project is licensed under the MIT License.

---

## Contact

If you have any questions about this project, feel free to reach out!

import { updateTimes, initializeTimes } from "./Main";

describe("Booking Form", () => {
  test("test for the initializeTimes function to validate that it returns the correct expected initial value", () => {
    const optionTime = initializeTimes();
    console.log(optionTime);
    expect(typeof optionTime).toBe("object");
  });
  test("test for the updateTimes function to validate that it returns the random value when date changed action is triggered.", () => {
    const optionTime = updateTimes(null, {
      type: "date_changed",
      date: "2024-11-08",
    });
    expect(typeof optionTime).toBe("object");
    expect(optionTime.length > 0).toBe(true);
  });
  test("test for the updateTimes function to validate that it returns the correct expected initial value", () => {
    const optionTime = updateTimes(
      [
        "00:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
      ],
      { type: null, date: "2024-11-08" }
    );
    console.log(optionTime);
    expect(typeof optionTime).toBe("object");
    expect(optionTime.length).toBe(9);
    expect(optionTime).toEqual([
      "00:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
    ]);
  });
});

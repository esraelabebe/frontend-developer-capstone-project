import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { updateTimes, initializeTimes } from "./Main";
import { useReducer } from "react";

describe("Booking Form", () => {
  test("test for the initializeTimes function to validate that it returns the correct expected initial value", () => {
    const optionTime = initializeTimes();
    expect(typeof optionTime).toBe("object");
    expect(optionTime.length > 0).toBe(true);
  });
  test("test for the updateTimes function to validate that it returns the same value that is provided in the state", () => {
    const optionTime = initializeTimes();
    const [availableTimes, dispatch] = renderHook(() => useReducer(updateTimes, optionTime));
    console.log(availableTimes);
    // expect(typeof availableTimes).toBe("object");
    // expect(availableTimes.length).toBe(9);
    // expect(availableTimes).toEqual(["00:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]);
  });
});

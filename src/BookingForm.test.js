import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

describe("Booking Form", () => {
  const submitForm = jest.fn();

  beforeEach(() => {
    const availableTimes = [
      "00:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
    ];
    const dispatch = jest.fn();
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );
  });
  test("Renders the BookingForm heading", () => {
    const headingElement = screen.getByText("Make Your Reservation");

    expect(headingElement).toBeInTheDocument();
  });
  test("should show required message for first name input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));
    await waitFor(() => {
      const firstNameErrorMessage = document.querySelector("#firstName-error");
      expect(firstNameErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show required message for last name input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));
    await waitFor(() => {
      const lastNameErrorMessage = document.querySelector("#lastName-error");
      expect(lastNameErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show required message for email input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const emailErrorMessage = document.querySelector("#userEmail-error");
      expect(emailErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show error message invalid email format", async () => {
    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "Johnmail-com"
    );

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const emailErrorMessage = document.querySelector("#userEmail-error");
      expect(emailErrorMessage).toHaveTextContent("Invalid email address");
    });
  });
  test("should show an error message for incorrect phone number format", async () => {
    await userEvent.type(
      screen.getByLabelText("Phone Number (optional)"),
      "John"
    );

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const phoneNumberErrorMessage =
        document.querySelector("#phoneNumber-error");
      expect(phoneNumberErrorMessage).toHaveTextContent(
        "Phone number is not valid"
      );
    });
  });
  test("should show an error message for input field when a past date is selected", async () => {
    await userEvent.type(screen.getByLabelText("Booking Date"), "2024-11-03");

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const dateErrorMessage = document.querySelector("#bookingDate-error");
      expect(dateErrorMessage).toHaveTextContent("Select date in future");
    });
  });
  test("should show required message for date input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const dateErrorMessage = document.querySelector("#bookingDate-error");
      expect(dateErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show required message for time input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const timeErrorMessage = document.querySelector("#bookTime-error");
      expect(timeErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show error message for Number of adults input field if the value is less than 1", async () => {
    await userEvent.type(screen.getByLabelText("Number of Adults"), "0");

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfAdultsrrorMessage = document.querySelector(
        "#bookingAdults-error"
      );
      expect(numberOfAdultsrrorMessage).toHaveTextContent(
        "Must be greater than zero"
      );
    });
  });
  test("should show error message for Number of adults input field if the value is greater than 20", async () => {
    await userEvent.type(screen.getByLabelText("Number of Adults"), "21");

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfAdultsrrorMessage = document.querySelector(
        "#bookingAdults-error"
      );
      expect(numberOfAdultsrrorMessage).toHaveTextContent(
        "Must not be more than 20"
      );
    });
  });
  test("should show required message for number of adults input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfAdultsrrorMessage = document.querySelector(
        "#bookingAdults-error"
      );
      expect(numberOfAdultsrrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show error message for Number of Children input field if the value is less than -1", async () => {
    await userEvent.type(screen.getByLabelText("Number of Children"), "-1");

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfAdultsrrorMessage = document.querySelector(
        "#bookingChildren-error"
      );
      expect(numberOfAdultsrrorMessage).toHaveTextContent(
        "Must not be less than zero"
      );
    });
  });
  test("should show error message for Number of Children input field if the value is greater than 20", async () => {
    await userEvent.type(screen.getByLabelText("Number of Children"), "21");

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfAdultsrrorMessage = document.querySelector(
        "#bookingChildren-error"
      );
      expect(numberOfAdultsrrorMessage).toHaveTextContent(
        "Must not be more than 20"
      );
    });
  });
  test("should show required message for number of children input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfChildrenErrorMessage = document.querySelector(
        "#bookingChildren-error"
      );
      expect(numberOfChildrenErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show required message for seatings input with empty value when the form is submitted", async () => {
    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const seatingsErrorMessage = document.querySelector("#seatingsError");
      expect(seatingsErrorMessage).toHaveTextContent("Required");
    });
  });
  test("should show error message for Special Requests input whe the number of characters exceeds 200.", async () => {
    await userEvent.type(
      screen.getByLabelText("Special Requests (optional)"),
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae enim tempus turpis ultricies condimentum nec ac felis. Integer facilisis sodales nibh, vitae gravida libero consectetur sed. Mauris fermentum vel sem quis maximus. Duis libero."
    );

    await userEvent.click(screen.getByRole("button", { name: "BOOK NOW" }));

    await waitFor(() => {
      const numberOfAdultsrrorMessage =
        document.querySelector("#requests-error");
      expect(numberOfAdultsrrorMessage).toHaveTextContent(
        "Must be 200 characters or less"
      );
    });
  });
});

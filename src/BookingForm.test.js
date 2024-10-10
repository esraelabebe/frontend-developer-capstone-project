import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe("Booking Form", () => {
    test("Renders the BookingForm heading", () => {
        const availableTimes = ["00:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
        const dispatch = jest.fn();
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch}/>);

        const headingElement = screen.getByText("Make Your Reservation");

        expect(headingElement).toBeInTheDocument();
    });
});

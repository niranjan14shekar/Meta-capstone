import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm", () => {
  render(<BookingForm />);
  const submitBtn = screen.getByText("Make Reservation");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(<BookingForm />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-03-05" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "20:00" } });
  expect(timeDropDown.value).toEqual("20:00");
});

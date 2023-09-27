import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose Date");
    expect(headingElement).toBeInTheDocument();
})

test('Checks the updateTimes functionality', () => {
  render(<BookingForm />);
  const timeUpdate = screen.getByText("10:30");
  expect(headingElement).toBeInTheDocument();
})

test('Checks the initializeTimes functionality', () => {
  render(<BookingForm />);
  const timeUpdate = screen.getByText("10:30");
  expect(headingElement).toBeInTheDocument();
})

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from '../components/calendar';

const getMonthName = (monthIndex) => {
    const date = new Date();
    date.setMonth(monthIndex);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

test('navigates to next month', () => {
    const { getByTestId } = render(<Calendar />);
    const currentMonthName = getByTestId('month-name').textContent;
    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);
    const newMonthName = getByTestId('month-name').textContent;
    const expectedMonthName = getMonthName(new Date(currentMonthName).getMonth() + 1);
    expect(newMonthName).toBe(expectedMonthName);
});

test('navigates to previous month', () => {
    const { getByTestId } = render(<Calendar />);
    const currentMonthName = getByTestId('month-name').textContent;
    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);
    const newMonthName = getByTestId('month-name').textContent;
    const expectedMonthName = getMonthName(new Date(currentMonthName).getMonth() - 1);
    expect(newMonthName).toBe(expectedMonthName);
});

test('resets to current date when month name is clicked', () => {
    const { getByTestId } = render(<Calendar />);

    // Get the initial month name
    const initialMonthName = getByTestId('month-name').textContent;

    const nextButton = getByTestId('next-button');

    // Navigate to a different month
    for (let i = 0; i < 8; i++) {
        fireEvent.click(nextButton);
    }

    // Get the month name after navigating
    const navigatedMonthName = getByTestId('month-name').textContent;

    const monthName = getByTestId('month-name');

    // Reset to the current month
    fireEvent.click(monthName);

    const resetMonthName = getByTestId('month-name').textContent;

    expect(resetMonthName).toBe(initialMonthName);
});

test('highlights the current day', () => {
    render(<Calendar />);
    const currentDay = new Date().getDate();
    const currentDayElement = screen.getByText(currentDay.toString());
    expect(currentDayElement).toHaveClass('text-font2', 'font-medium', 'bg-secondary', 'rounded-full');
});
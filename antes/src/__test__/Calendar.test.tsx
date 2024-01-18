import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calendar from '@/components/calendar'

const getMonthName = (monthIndex: number) => {
    const date = new Date()
    date.setMonth(monthIndex)
    return Intl.DateTimeFormat('nl-NL', { month: 'long', year: 'numeric' }).format(date)
    // return date.toLocaleString('nl-NL', { month: 'long', year: 'numeric' })
}

test('navigates to next month', () => {
  const { getByTestId } = render(<Calendar />)
  const currentMonthName = getByTestId('month-name').textContent
  expect(currentMonthName).not.toBeNull()
  const nextButton = getByTestId('next-button')
  fireEvent.click(nextButton)
  const newMonthName = getByTestId('month-name').textContent
  expect(newMonthName).not.toBeNull()
  const expectedMonthName = getMonthName(new Date(currentMonthName!).getMonth() + 1)
  expect(newMonthName).toBe(expectedMonthName)
})

test('navigates to previous month', () => {
  const { getByTestId } = render(<Calendar />)
  const currentMonthName = getByTestId('month-name').textContent
  expect(currentMonthName).not.toBeNull()
  const prevButton = getByTestId('prev-button')
  fireEvent.click(prevButton)
  const newMonthName = getByTestId('month-name').textContent
  expect(newMonthName).not.toBeNull()
  const expectedMonthName = getMonthName(new Date(currentMonthName!).getMonth() - 1)
  expect(newMonthName).toBe(expectedMonthName)
})

test('resets to current date when month name is clicked', () => {
  const { getByTestId } = render(<Calendar />)
  const initialMonthName = getByTestId('month-name').textContent
  expect(initialMonthName).not.toBeNull()

  const nextButton = getByTestId('next-button')
  for (let i = 0; i < 8; i++) {
    fireEvent.click(nextButton)
  }

  const navigatedMonthName = getByTestId('month-name').textContent
  expect(navigatedMonthName).not.toBeNull()

  const monthName = getByTestId('month-name')
  fireEvent.click(monthName)

  const resetMonthName = getByTestId('month-name').textContent
  expect(resetMonthName).not.toBeNull()
  expect(resetMonthName).toBe(initialMonthName)
})

test('highlights the current day', () => {
  render(<Calendar />)
  const currentDay = new Date().getDate()
  const currentDayElement = screen.getByText(currentDay.toString())
  expect(currentDayElement).toHaveClass('text-font2', 'font-medium', 'bg-secondary', 'rounded-full')
})
import { render, fireEvent } from '@testing-library/react'
import { LongCalendar } from '@/components/long_calendar'
import '@testing-library/jest-dom'

describe('LongCalendar', () => {
  const mockEvents = [
    {
      id: '1',
      title: 'Test Event',
      description: 'This is a test event',
      location: 'Test Location',
      image: 'Test Image',
      dateStart: new Date().toISOString(),
      dateEnd: new Date().toISOString(),
    },
  ]

  it('navigates to the next week', () => {
    const { getByTestId } = render(<LongCalendar events={mockEvents} />)
    const nextButton = getByTestId('next-button')
    fireEvent.click(nextButton)
    const oneWeekLater = new Date()
    oneWeekLater.setDate(oneWeekLater.getDate() + 7)
    const expectedDate = oneWeekLater.toLocaleDateString('default', { month: 'long', year: 'numeric' })
    expect(getByTestId('current-date')).toHaveTextContent(expectedDate)
  })

  it('navigates to the previous week', () => {
    const { getByTestId } = render(<LongCalendar events={mockEvents} />)
    const prevButton = getByTestId('prev-button')
    fireEvent.click(prevButton)
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const expectedDate = oneWeekAgo.toLocaleDateString('default', { month: 'long', year: 'numeric' })
    expect(getByTestId('current-date')).toHaveTextContent(expectedDate)
  })

  it('resets to the current date', () => {
    const { getByTestId } = render(<LongCalendar events={mockEvents} />)
    const currentDate = getByTestId('current-date')
    fireEvent.click(currentDate)
    const today = new Date()
    const expectedDate = today.toLocaleDateString('default', { month: 'long', year: 'numeric' })
    expect(getByTestId('current-date')).toHaveTextContent(expectedDate)
  })

  it('renders events', () => {
    const { getAllByText } = render(<LongCalendar events={mockEvents} />)
    const events = getAllByText('Test Event')
    expect(events.length).toBeGreaterThan(0)
  })
})
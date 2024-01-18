import { render, fireEvent, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import Dashboard from '@/app/dashboard/page'
import { ELearningCard } from '@/components/dashboard/elearning_card'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    route: '/dashboard',
    query: {},
  }),
}))

jest.mock('next-auth/react')

describe('Dashboard', () => {
  test('redirects correctly when the E-Learning button is pressed', async () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { id: 'clri1xxm6000a12aqak9h1fre', name: 'Ardit Fazliji', email: 'johndoe@example.com' }, expires: '2024-02-20T00:00:00.000Z' },
      status: 'authenticated',
    })
    
    render(<Dashboard />)

    const allButtons = screen.getByText('Ga verder')
    fireEvent.click(allButtons)
    const push = require('next/navigation').useRouter().push
    expect(push).toHaveBeenCalledWith('/elearning')
  })

  test('redirects correctly when the Q&A button is pressed', async () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { id: 1, name: 'John Doe', email: 'johndoe@example.com' }, expires: '2024-02-20T00:00:00.000Z' },
      status: 'authenticated',
    })

    render(<Dashboard />)

    const allButtons = screen.getAllByText('Ga verder')
    fireEvent.click(allButtons[0])
    const push = require('next/navigation').useRouter().push
    expect(push).toHaveBeenCalledWith('/qa')
  })
  
  test('redirects correctly when the event button is pressed', async () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { id: 1, name: 'John Doe', email: 'johndoe@example.com' }, expires: '2024-02-20T00:00:00.000Z' },
      status: 'authenticated',
    })

    render(<Dashboard />)

    const allButtons = screen.getAllByText('Ga verder')
    fireEvent.click(allButtons[1])
    const push = require('next/navigation').useRouter().push
    expect(push).toHaveBeenCalledWith('/event')
  })
})
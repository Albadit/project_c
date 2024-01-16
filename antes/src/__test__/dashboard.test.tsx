import { render, fireEvent, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import Dashboard from '@/app/dashboard/page'

// Mock next/router and next-auth/react modules
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    route: '/',
    query: {},
  }),
}))

jest.mock('next-auth/react')

describe('Dashboard', () => {
  it('redirects correctly when the QA button is pressed', () => {
    // Mocking the authenticated session
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'John Doe', email: 'johndoe@example.com' }, expires: '2024-01-01T00:00:00.000Z' },
      status: 'authenticated',
    })

    // Rendering the component
    render(<Dashboard />)

    // Simulating button click
    fireEvent.click(screen.getByText('Q & A'))

    // Checking if push was called with the expected argument
    const push = require('next/navigation').useRouter().push
    expect(push).toHaveBeenCalledWith('/qa')
  })
})

import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders title and default result', () => {
    render(<App />)
    expect(screen.getByRole('heading').textContent).toBe('Calculator')
    expect(screen.getByRole('status').textContent).toBe('0')
  })

  it('computes with the chosen operation', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('a'), { target: { value: '6' } })
    fireEvent.change(screen.getByLabelText('b'), { target: { value: '3' } })
    fireEvent.change(screen.getByLabelText('operation'), { target: { value: 'divide' } })
    expect(screen.getByRole('status').textContent).toBe('2')
  })
})

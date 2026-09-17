import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import AnecdoteList from './AnecdoteList'
import { useAnecdotes, useAnecdoteAction } from '../store'

// Mock store
vi.mock('../store', () => ({
  useAnecdotes: vi.fn(),
  useAnecdoteAction: vi.fn(),
}))

describe('<AnecdoteList />', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    useAnecdoteAction.mockReturnValue({
      addVote: vi.fn(),
      getData: vi.fn(),
      deleteData: vi.fn(),
    })
  })

  it('renders anecdotes sorted by votes in descending order', () => {
    const unsortedAnecdotes = [
      { content: 'Medium anecdote', id: '1', votes: 50 },
      { content: 'Most voted anecdote', id: '2', votes: 100 },
      { content: 'Least voted anecdote', id: '3', votes: 10 },
      { content: 'Zero votes anecdote', id: '4', votes: 0 },
    ]

    useAnecdotes.mockReturnValue(unsortedAnecdotes)

    render(<AnecdoteList />)
    const renderedAnecdotes = screen
      .getAllByTestId('anecdote-content')
      .map((el) => el.textContent)

    expect(renderedAnecdotes).toEqual([
      'Most voted anecdote',
      'Medium anecdote',
      'Least voted anecdote',
      'Zero votes anecdote',
    ])
  })
})

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import backendService from './service/dataService'
import { useAnecdotes, useAnecdoteAction } from './store'

vi.mock('./service/dataService', () => ({
  default: {
    getAll: vi.fn(),
    createNew: vi.fn(),
    editData: vi.fn(),
    removeData: vi.fn(),
  },
}))

describe('anecdote store initialization', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes state with anecdotes returned by backend', async () => {
    const anecdotesFromBackend = [
      { content: 'Test anecdote 1', id: '1', votes: 0 },
      { content: 'Test anecdote 2', id: '2', votes: 5 },
    ]
    backendService.getAll.mockResolvedValue(anecdotesFromBackend)

    const { result } = renderHook(() => ({
      anecdotes: useAnecdotes(),
      actions: useAnecdoteAction(),
    }))

    await act(async () => {
      await result.current.actions.getData()
    })

    await waitFor(() => {
      expect(result.current.anecdotes).toEqual(anecdotesFromBackend)
    })

    expect(backendService.getAll).toHaveBeenCalledTimes(1)
  })
})

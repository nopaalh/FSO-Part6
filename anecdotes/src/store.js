import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import backendService from './service/dataService'
import useNotificationStore from './notificationStore'

	const getId = () => (100000 * Math.random()).toFixed(0)

	const asObject = anecdote => ({
	  content: anecdote,
	  id: getId(),
	  votes: 0
	})

	const useAnecdoteStore = create((set) => ({
		anecdotes: [],
		filter: '',
		actions: {
			addVote: async (anecdote) => {
				const updated = { ...anecdote, votes: anecdote.votes + 1 }
				const data = await backendService.editData(anecdote.id, updated)

				set(state => ({
					anecdotes: state.anecdotes.map((anecdote) =>
						anecdote.id === data.id ? data : anecdote
					)
				}))
				useNotificationStore.getState().setNotification(`you voted '${data.content}'`)
			},
			addNew: (content) => set(state => ({
				anecdotes: [...state.anecdotes, asObject(content)]
		 	})),
			setFilter: (value) => set({ filter: value }),
			getData: async () => {
				const datas = await backendService.getAll()
				set(() => ({
					anecdotes: datas
				}))
			},
			addData: async (content) => {
				content = asObject(content)
				const data = await backendService.createNew(content)
				set((state) => ({
					anecdotes: [...state.anecdotes, data]
				}))
			}

		},
	}))

export const useAnecdotes = () => useAnecdoteStore(useShallow(({ anecdotes, filter }) => {
	if (filter === '') return anecdotes
	return anecdotes.filter(anecdote => anecdote.content.includes(filter))
}))

export const useAnecdoteAction = () => useAnecdoteStore((state) => state.actions)

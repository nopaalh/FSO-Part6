import { create } from 'zustand'

const useNotificationStore = create((set) => ({
	message: '',
	setNotification: (message, timeout = 5000) => {
		set({ message })
		setTimeout(() => {
			set({ message: '' })
		}, timeout)
	},
	clearNotification: () => set({ message: '' })
}))

export default useNotificationStore

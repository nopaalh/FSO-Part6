import { create } from 'zustand'


const useStatCounter = create(set => ({
	stat: {
		good: 0,
		neutral: 0,
		bad: 0,
	},
	actions: {
		addGood: () => set(state => ({ stat: { ...state.stat, good: state.stat.good + 1 } })),
		addNeutral: () => set(state => ({ stat: { ...state.stat, neutral: state.stat.neutral + 1 } })),
		addBad: () => set( state => ({ stat : {...state.stat, bad: state.stat.bad + 1 } }))
	}
}))

export const useStatDatas = () => useStatCounter(state => state.stat)
export const useStatActions = () => useStatCounter(state => state.actions)

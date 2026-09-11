import { useAnecdoteAction } from "../store";
import useNotificationStore from "../notificationStore";

const AnecdoteForm = () => {
	const { addData } = useAnecdoteAction()
	const setNotification = useNotificationStore((state) => state.setNotification)

	const addList = (e) => {
		e.preventDefault()
		const anecdote = e.target.anecdote.value
		addData(anecdote)
		setNotification(`You created ${anecdote}`)
		e.target.reset()
	}
	return (
		<>
			<form onSubmit={addList}>
				<input name='anecdote' />
				<button type="submit">Create</button>
			</form>
		</>
	)
}

export default AnecdoteForm

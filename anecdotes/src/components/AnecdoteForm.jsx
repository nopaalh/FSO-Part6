import { useAnecdoteAction } from "../store";

const AnecdoteForm = () => {
	const { addNew } = useAnecdoteAction()

	const addList = (e) => {
		e.preventDefault()
		const anecdote = e.target.content.value
		addNew(anecdote)
		e.target.reset()
	}
	return (
		<>
			<form onSubmit={addList}>
				<input name='content' />
				<button type="submit">Create</button>
			</form>
		</>
	)
}

export default AnecdoteForm

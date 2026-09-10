import { useAnecdoteAction } from "../store";

const AnecdoteForm = () => {
	const { addData } = useAnecdoteAction()

	const addList = (e) => {
		e.preventDefault()
		const anecdote = e.target.content.value
		addData(anecdote)
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

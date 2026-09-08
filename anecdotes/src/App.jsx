import { useAnecdoteAction } from "./store"
import AnecdoteList from "./components/AnecdoteList"
const App = () => {
	const { addNew } = useAnecdoteAction()

	const addList = (e) => {
		e.preventDefault()
		const anecdote = e.target.content.value
		addNew(anecdote)
		e.target.reset()
	}
	return (
		<div>
			<h2>Anecdotes</h2>
			<AnecdoteList />

			<h2>create new</h2>
			<form onSubmit={addList}>
				<div>
					<input data-testid="new" name='content' />
				</div>
				<button type="submit">create</button>
			</form>
		</div>
  )
}

export default App

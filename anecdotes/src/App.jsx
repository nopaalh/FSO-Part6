import { useAnecdotes, useAnecdoteAction } from "./store"

const App = () => {
	const anecdotes = useAnecdotes()
	const { addVote, addNew } = useAnecdoteAction()

	const addList = (e) => {
		e.preventDefault()
		const anecdote = e.target.content.value
		addNew(anecdote)
		e.target.reset()
	}
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

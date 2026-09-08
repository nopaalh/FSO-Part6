import { useAnecdotes,useAnecdoteAction } from "../store";

const AnecdoteList = () => {
	const anecdotes = useAnecdotes()
	const { addVote } = useAnecdoteAction()
	return (
		<>
			{anecdotes.toSorted(( a,b ) => ( b.votes - a.votes)).map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div> has {anecdote.votes}
						<button onClick={() => addVote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
		</>
	)
}

export default AnecdoteList

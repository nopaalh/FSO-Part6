import { useAnecdotes,useAnecdoteAction } from "../store";
import { useEffect } from "react";
const AnecdoteList = () => {
	const { addVote,getData } = useAnecdoteAction()

	useEffect(() => {
		getData()
	}, [getData])
	const anecdotes = useAnecdotes()
	return (
		<>
			{anecdotes.toSorted(( a,b ) => ( b.votes - a.votes)).map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div> has {anecdote.votes}
						<button type='button' onClick={() => addVote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</>
	)
}

export default AnecdoteList

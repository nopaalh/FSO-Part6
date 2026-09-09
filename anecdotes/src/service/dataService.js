const baseUrl = 'http://localhost:3001/anecdotes'



const getAll = async () => {
	const response = await fetch(baseUrl)

	if (!response.ok) {
		throw Error('Failed to fetch data')
	}

	const data = await response.json()
	return data
}

export default {
	getAll
}

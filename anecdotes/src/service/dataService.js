const baseUrl = 'http://localhost:3001/anecdotes'



const getAll = async () => {
	const response = await fetch(baseUrl)

	if (!response.ok) {
		throw Error('Failed to fetch data')
	}

	const data = await response.json()
	return data
}

const createNew = async (content) => {
	const option = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body : JSON.stringify(content)
	}

	const response = await fetch(baseUrl, option)
	if (!response.ok) {
		throw new Error('Failed to create server')
	}

	const data = await response.json()
	return data
}

export default {
	getAll,
	createNew
}

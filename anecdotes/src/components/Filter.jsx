import { useAnecdoteAction } from "../store"

const Filter = () => {
	const { setFilter } = useAnecdoteAction()

	const handleChange = (event) => {
		const filterValue = event.target.value
		setFilter(filterValue)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter

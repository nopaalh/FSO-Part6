import useNotificationStore from '../notificationStore'

const Notification = () => {
	const message = useNotificationStore((state) => state.message)

	if (!message) return null

	return (
		<div data-testid='notification' style={{
			border: '1px solid green',
			padding: '10px',
			marginBottom: '10px',
			color: 'green'
		}}>
			{message}
		</div>
	)
}

export default Notification

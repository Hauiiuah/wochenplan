const Day = ({ index }) => {
	const days = [
		'Montag',
		'Dienstag',
		'Mittwoch',
		'Donnerstag',
		'Freitag',
		'Samstag',
	]

	return <p className='weekday gray'>{days[index]}:</p>
}


export default Day
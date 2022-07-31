import Day from './day'

const EmptyMenu = ({ weekday }) => {
	return (
		<div className='menu'>
			<Day index={weekday} />
			<p className='menu-name'></p>
			<div className='center'>
				<div className='center-block gray'></div>
				<div className='center-button-block'>
					<button className='select-menu-btn'>Gericht auswählen</button>
				</div>
			</div>

			<div className='menu-bottom'>
				<p></p>
				<p></p>
			</div>
			<div className='left gray'></div>
		</div>
	)
}

export default EmptyMenu

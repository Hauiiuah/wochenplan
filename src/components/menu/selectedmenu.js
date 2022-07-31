import Day from './day'

const SelectedMenu = ({ menu, weekday }) => {
	return (
		<div className='menu'>
			<Day index={weekday} />
			<p className='menu-name'>{menu.name}</p>

			<div className='center'>
				<div className='center-block gray'></div>
				<img src={`./assets/${menu.img}`} alt={menu.name} />
			</div>

			<div className='menu-bottom'>
				<p>{menu.duration} min</p>
				<p>{menu.cals}kcal</p>
			</div>
			<div className='left gray'>
				<button>
					<span className='delete'></span>
				</button>
			</div>
		</div>
	)
}

export default SelectedMenu

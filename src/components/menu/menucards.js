import  Menu from './menu.js'

const MenuCards = ({ menus }) => {
	const days = [
		'Montag',
		'Dienstag',
		'Mittwoch',
		'Donnerstag',
		'Freitag',
		'Samstag',
	]
	return (
		<div className='menu-cards'>
			{menus.map((menu, index) => (
				<Menu key={index} menu={menu} weekday={days[index]} />
			))}
		</div>
	)
}

export default MenuCards

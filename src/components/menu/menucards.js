import  Menu from './menu.js'

const MenuCards = ({ menus, updateMenuCallback }) => {
	const days = [
		'Montag',
		'Dienstag',
		'Mittwoch',
		'Donnerstag',
		'Freitag',
		'Samstag',
	]


	if(!menus) return

	return (
		<div className='menu-cards'>
			{menus.map((menu, index) => (
				<Menu key={index} menu={menu} weekday={days[index]} updateMenuCallback={(recipe) => updateMenuCallback(recipe,index)}  />
			))}
		</div>
	)
}

export default MenuCards

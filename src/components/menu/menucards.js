import { Menu } from './'

const MenuCards = ({ menus }) => {
	return (
		<div className='menu-cards'>
			{menus.map((menu, index) => (
				<Menu menu={menu} weekday={index} />
			))}
		</div>
	)
}

export default MenuCards

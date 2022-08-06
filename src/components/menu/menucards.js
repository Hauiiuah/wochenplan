import { Menu } from './'

const MenuCards = ({ menus }) => {
	return (
		<div className='menu-cards'>
			{menus.map((menu, index) => (
				<Menu key={index} menu={menu} weekday={index} />
			))}
		</div>
	)
}

export default MenuCards

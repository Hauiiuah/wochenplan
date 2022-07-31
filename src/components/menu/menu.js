import { SelectedMenu, EmptyMenu } from './'

const Menu = ({ menu, weekday }) => {
	return menu ? (
		<SelectedMenu menu={menu} weekday={weekday} />
	) : (
		<EmptyMenu weekday={weekday} />
	)
}

export default Menu

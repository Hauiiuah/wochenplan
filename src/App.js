
import { MenuCards,ShoppingList,WeekNavigator,Layout } from './components'

import {useState, useEffect} from "react";

import MenuProvider from "./services/menuProvider";

const App = () => {


	const emptyMeals=Array.from({length: 6},()=>null)

	const [menus, setMenus] = useState([])
	const [actualWeek, setActualWeek] = useState('')

	useEffect(() => {
		(async() => {
			const menus = await MenuProvider.getForWeek(actualWeek)
			if(!menus) {
				setMenus(emptyMeals)
				return
			}

			setMenus(menus.meals)
		})()


	},[actualWeek])


	const updateMenu=async (menu,weekday)=>{
		console.log('UpdateMenu',{menu,weekday})
		let newMenu = [...menus]
		newMenu[weekday]=menu
		const dbResult = await MenuProvider.updateMenu(newMenu, actualWeek)
		setMenus(dbResult.meals)



	}

	return (
		<div className='content'>
			<Layout.Header />
			<WeekNavigator updateWeekCallback={(week) => setActualWeek(week)}/>
			<MenuCards menus={menus} updateMenuCallback={updateMenu}/>
			{/*<ShoppingList.ShoppingList menus={menus}/>*/}
			<ShoppingList.ShoppingListTable menus={menus} />
		</div>
	)
}

export default App

import {useEffect, useState} from "react";
import {ModalFrame,RecipeSelector} from '../index'

const Menu = ({ menu, weekday,updateMenuCallback}) => {

	const [modalVisible, setModalVisible] = useState(false)
	const [currentMenu,setCurrentMenu] =useState({})


	useEffect(() => {
		setCurrentMenu(menu)
	},[menu])


	const abortSelection = () => {
		console.log('abortSelection')
		setModalVisible(false)
		setCurrentMenu(null);
	}

	const successFullSelection = () => {
		console.log('successFullSelection')
		setModalVisible(false)
		if(currentMenu){
			console.log("Save to DB")
			updateMenuCallback(currentMenu)
		}
	}


	return (
		<div className='menu'>

			<ModalFrame
				title={`Gericht auswählen für ${weekday}`}
				visible={modalVisible}
				onClose={abortSelection}
				onSuccess={successFullSelection}>
				<RecipeSelector selectRecipeCallback={setCurrentMenu}/>
			</ModalFrame>
			<p className='weekday gray'>{weekday}:</p>
			<p className='menu-name'>{currentMenu?.name || ''}</p>

			<div className='center'>
				<div className='center-block gray'></div>
				{currentMenu
					? <img src={`./assets/recipes/${currentMenu.img}`} alt={currentMenu.name} className="menu-img" />
					: <div className='center-button-block'>
						<button className='select-menu-btn' onClick={() => setModalVisible(true)}>Gericht auswählen</button>
					</div> }
			</div>

			<div className='menu-bottom'>
				<p>{currentMenu ? `${currentMenu.duration} min` : ""}</p>
				<p>{currentMenu ? `${currentMenu.cals}kcal` : ""}</p>
			</div>
			<div className='left gray'>
				{currentMenu ? <button onClick={()=>{
					setCurrentMenu(null)
					updateMenuCallback(null)
				}}>
					<span className='delete'></span>
				</button> : <></>}
			</div>
		</div>
	)
}

export default Menu

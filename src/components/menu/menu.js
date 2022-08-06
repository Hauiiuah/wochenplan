import {useState} from "react";
import {ModalFrame} from '../index'

const Menu = ({ menu, weekday }) => {
	const [modalVisible, setModalVisible] = useState(false)


	return (
		<div className='menu'>
			<ModalFrame title={`Gericht auswählen für ${weekday}`} visible={modalVisible} onClose={() => setModalVisible(false)}>

			</ModalFrame>
			<p className='weekday gray'>{weekday}:</p>
			<p className='menu-name'>{menu?.name || ''}</p>

			<div className='center'>
				<div className='center-block gray'></div>
				{menu
					? <img src={`./assets/${menu.img}`} alt={menu.name} />
					: <div className='center-button-block'>
						<button className='select-menu-btn' onClick={() => setModalVisible(true)}>Gericht auswählen</button>
					</div> }
			</div>

			<div className='menu-bottom'>
				<p>{menu ? `${menu.duration} min` : ""}</p>
				<p>{menu ? `${menu.cals}kcal` : ""}</p>
			</div>
			<div className='left gray'>
				{menu ? <button>
					<span className='delete'></span>
				</button> : <></>}
			</div>
		</div>
	)
}

export default Menu

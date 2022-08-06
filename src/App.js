
import { MenuCards,ModalFrame } from './components'
import {RecipeProvider} from "./services";
import {useState} from "react";

const Header = () => <div className='header'></div>
const Footer = ({onClick}) => (
	<div className='footer'>
		<button className='gen-shoppinglist-btn' onClick={onClick}>Einkaufsliste generieren</button>
	</div>
)




RecipeProvider.getAll().then((data) =>{
	console.log(data)
})

const App = () => {

	const [modalVisible,setModalVisible] = useState(false)
	const showModal = () => {
		console.log('Show modal pressed')
		setModalVisible(true)

	}
	const menus = [
		{
			name: 'Hähnchen unter Senfbrösel-Haube',
			cals: 695,
			duration: 35,
			img: 'menu-bg.png',
		},
		{
			name: 'Hacksülze',
			cals: 1337,
			duration: 123,
			img: 'menu-bg.png',
		},
		{
			name: 'Pommes und kleine Fleisch',
			cals: 123,
			duration: 5,
			img: 'menu-bg.png',
		},
		null,
		{
			name: 'Eurodöner',
			cals: 1000,
			duration: 15,
			img: 'menu-bg.png',
		},
		{
			name: 'Box 3 fettich bei Ihnen',
			cals: 1,
			duration: 20,
			img: 'menu-bg.png',
		},
	]

	return (
		<div className='content'>
			<ModalFrame
				title={"Einkaufsliste generieren"}
				visible={modalVisible}
				hasFailure={true}
				onSuccess={()=>{
					console.log('Success')
					setModalVisible(false)
				}}
				onClose={() => {
					console.log('Failure')
					setModalVisible(false)
				}}>
				<ul>
					<li>Kacke im Quadrat</li>
					<li>Wurst im Wasser</li>
				</ul>
			</ModalFrame>
			<Header />
			<MenuCards menus={menus} />
			<Footer onClick={showModal}/>
		</div>
	)
}

export default App

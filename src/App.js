import { MenuCards } from './components'

const Header = () => <div className='header'></div>
const Footer = () => (
	<div class='footer'>
		<button class='gen-shoppinglist-btn'>Einkaufsliste generieren</button>
	</div>
)

const App = () => {
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
			<Header />
			<MenuCards menus={menus} />
			<Footer />
		</div>
	)
}

export default App

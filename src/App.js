const days = [
	'Montag',
	'Dienstag',
	'Mittwoch',
	'Donnerstag',
	'Freitag',
	'Samstag',
]

const SelectedMenu = ({ menu, weekday }) => {
	return (
		<div className='menu'>
			<p className='weekday gray'>{days[weekday]}:</p>
			<p className='menu-name'>{menu.name}</p>

			<div className='center'>
				<div className='center-block gray'></div>
				<img src={`./assets/${menu.img}`} alt={menu.name} />
			</div>

			<div className='menu-bottom'>
				<p>{menu.duration} min</p>
				<p>{menu.cals}kcal</p>
			</div>
			<div className='left gray'>
				<button>
					<span className='delete'></span>
				</button>
			</div>
		</div>
	)
}

const EmptyMenu = ({ weekday }) => {
	return (
		<div className='menu'>
			<p className='weekday gray'>{days[weekday]}:</p>
			<p className='menu-name'></p>
			<div className='center'>
				<div className='center-block gray'></div>
				<div className='center-button-block'>
					<button className='select-menu-btn'>Gericht auswählen</button>
				</div>
			</div>

			<div className='menu-bottom'>
				<p></p>
				<p></p>
			</div>
			<div className='left gray'></div>
		</div>
	)
}

const Menu = ({ menu, weekday }) => {
	return menu ? (
		<SelectedMenu menu={menu} weekday={weekday} />
	) : (
		<EmptyMenu weekday={weekday} />
	)
}

const MenuCards = () => {
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
		<div className='menu-cards'>
			{menus.map((menu, index) => (
				<Menu menu={menu} weekday={index} />
			))}
		</div>
	)
}

const Header = () => <div className='header'></div>
const Footer = () => (
	<div class='footer'>
		<button class='gen-shoppinglist-btn'>Einkaufsliste generieren</button>
	</div>
)

const App = () => {
	return (
		<div className='content'>
			<Header />
			<MenuCards />
			<Footer />
		</div>
	)
}

export default App

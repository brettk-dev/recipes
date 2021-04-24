const Layout = ({children}) => {
	return (
		<>
			<header>
				<h1>Recipes</h1>
			</header>
			<main>
				{children}
			</main>
		</>
	)
};

export default Layout

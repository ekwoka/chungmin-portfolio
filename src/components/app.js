import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
	<div id="app" class="min-h-screen">
		<Header />
		<Router>
			<Home path="/" />
		</Router>
		<Footer />
	</div>
)

export default App;

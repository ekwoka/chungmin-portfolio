import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Project from '../routes/project';

const App = () => (
	<div id="app" class="min-h-screen">
		<Header />
		<Router>
			<Home path="/" />
			<Project path="/project/" />
		</Router>
		<Footer />
	</div>
)

export default App;

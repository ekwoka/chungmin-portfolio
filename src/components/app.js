import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import { mainNavigation } from '../data/navigation';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Project from '../routes/project';

const App = () => (
  <div id="app" class="min-h-screen">
    <Header />
    <Router class="w-full">
      <Home path="/" />
      <Project path="/project/" />
    </Router>
    <Footer />
  </div>
);

export default App;

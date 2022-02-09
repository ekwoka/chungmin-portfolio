import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Project from '../routes/project';
import Projects from '../routes/projects';

const App = () => (
  <div id="app" class="min-h-screen">
    <Header />
    <Router class="w-full">
      <Home path="/" />
      <Project path="/project/:project" />
      <Projects path="/projects" />
    </Router>
    <Footer />
  </div>
);

export default App;

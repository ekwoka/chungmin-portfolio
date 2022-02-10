import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

import Home from '../routes/home';
import Project from '../routes/project';
import Projects from '../routes/projects';
import About from '../routes/about';

const App = () => (
  <div id="app" class="min-h-screen">
    <Header />
    <Router class="w-full">
      <Home path="/" />
      <About path="/about" />
      <Project path="/project/:project" />
      <Projects path="/projects" />
    </Router>
    <Footer />
  </div>
);

export default App;

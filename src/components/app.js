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
    <layout-group class="flex flex-col md:flex-row min-h-max h-full max-w-screen-2xl mx-auto">
      <sidebar-left class="bg-neutral-100 w-1/4 flex-none pt-36 hidden md:block px-8">
        <nav class="flex font-goldenbook text-neutral-800 flex-col sticky top-36 text-2xl gap-y-4">
          {mainNavigation.map((item) => (
            <Link
              key={item.target}
              href={item.target}
              class="block transition-all hover:tracking-widest min-w-[8ch] drop-shadow py-2 px-4"
              activeClass="bg-neutral-200 pointer-events-none">
              {item.label}
            </Link>
          ))}
        </nav>
      </sidebar-left>
      <Router class="w-1/4">
        <Home path="/" />
        <Project path="/project/" />
      </Router>
    </layout-group>
    <Footer />
  </div>
);

export default App;

import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';

const NAVIGATION = [
  {
    label: 'About',
    target: '/'
  },
  {
    label: 'Projects',
    target: '/projects'
  }
];

const Header = () => {
  const [isScrolled, setScroll] = useState(false);

  useEffect(()=>{
	  window.addEventListener('scroll',()=>{
		  setScroll(window.scrollY > 100);
	  })
  }, [])

  return (
    <header class={`backdrop-blur py-4 px-8 fixed top-0 inset-x-0 transition-color duration-500  z-10 ${isScrolled?'bg-stone-50 text-stone-900':'bg-stone-50/0 text-stone-900'}`}>
      <header-wrapper class="flex flex-row justify-between gap-4 max-w-screen-md mx-auto">
        <h1 class="text-xl flex-shrink-0">Claire Lee</h1>
        <nav class="flex gap-4 flex-shrink">
          {NAVIGATION.map((item, i) => (
            <Link key={i} href={item.target} class="block transition-all hover:tracking-widest min-w-[8ch] text-center drop-shadow" activeClass="font-bold pointer-events-none">
              {item.label}
            </Link>
          ))}
        </nav>
      </header-wrapper>
    </header>
  );
};

export default Header;

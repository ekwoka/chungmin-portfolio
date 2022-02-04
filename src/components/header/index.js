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

  console.log(isScrolled)

  useEffect(()=>{
	  window.addEventListener('scroll',()=>{
		  setScroll(window.scrollY > 100);
	  })
  }, [])

  return (
    <header class={`backdrop-blur py-4 px-8 fixed top-0 inset-x-0 transition-all duration-500 bg-stone-50 ${isScrolled?'bg-opacity-100 text-stone-900':'bg-opacity-10 text-stone-50'}`}>
      <header-wrapper class="flex flex-row justify-between gap-4 max-w-screen-md mx-auto">
        <h1 class="text-xl">Chungmin Lee</h1>
        <nav class="flex gap-4">
          {NAVIGATION.map((item) => (
            <Link href={item.target} class="block" activeClass="font-bold">
              {item.label}
            </Link>
          ))}
        </nav>
      </header-wrapper>
    </header>
  );
};

export default Header;

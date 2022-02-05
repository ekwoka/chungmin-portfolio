import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';
import MobileNav from '../mobileMenu';

const NAVIGATION = [
  {
    label: 'About',
    target: '/'
  },
  {
    label: 'Projects',
    target: '/project/'
  }
];

const Header = () => {
  const [isScrolled, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <header class={`backdrop-blur-sm py-4 px-8 fixed top-0 inset-x-0 transition-all duration-500 z-20 ${isScrolled || navOpen ? 'bg-stone-50 text-stone-900 shadow' : 'bg-stone-50/0 text-stone-900 shadow-none'}`}>
        <header-wrapper class="flex flex-row justify-between mx-auto gap-4 max-w-screen-md">
          <h1 class="flex-shrink-0 px-4 py-2 text-xl">Claire Lee</h1>
          <nav class="flex-shrink hidden gap-4 md:flex">
            {NAVIGATION.map((item, i) => (
              <Link key={i} href={item.target} class="block transition-all hover:tracking-widest min-w-[8ch] text-center drop-shadow py-2 px-4" activeClass="font-bold pointer-events-none">
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNav className="block md:hidden" navigation={NAVIGATION} setOpen={setNavOpen} />
        </header-wrapper>
      </header>
      <div class={`fixed inset-0 w-full h-screen z-10 bg-stone-900 transition-opacity ${navOpen ? 'opacity-75 duration-700' : 'opacity-0 duration-300'}`}></div>
    </>
  );
};

export default Header;

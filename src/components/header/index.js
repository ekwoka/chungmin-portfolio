import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';
import MobileNav from '../mobileMenu';
import { mainNavigation } from '../../data/navigation';

const Header = () => {
  const [isScrolled, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 25);
    });
  }, []);

  useEffect(
    () => document.body.classList.toggle('no-scroll', navOpen),
    [navOpen]
  );

  return (
    <>
      <header
        class={`py-4 px-8 fixed top-0 inset-x-0 transition-all duration-500 z-20 ${
          isScrolled || navOpen
            ? 'bg-neutral-50/75 text-neutral-900 shadow backdrop-blur'
            : 'bg-neutral-50/0 text-neutral-900 shadow-none backdrop-blur-0'
        }`}>
        <header-wrapper class="flex flex-row md:flex-col justify-between md:justify-center mx-auto gap-4 w-full md:max-w-max md:px-8">
          <h1 class="flex-shrink-0 px-4 py-2 text-xl font-goldenbook uppercase md:text-3xl text-center">
            Claire Lee
          </h1>
          <nav class="flex-shrink hidden gap-4 md:flex justify-self-end">
            {mainNavigation.map((item) => (
              <Link
                key={item.target}
                href={item.target}
                class="block transition-all hover:tracking-widest min-w-[12ch] text-center py-2 px-4 flex-none"
                activeClass="font-bold pointer-events-none">
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNav
            className="block md:hidden"
            navigation={mainNavigation}
            setOpen={setNavOpen}
          />
        </header-wrapper>
      </header>
      <div
        class={`fixed inset-0 w-full h-screen z-10 bg-neutral-900 transition-opacity pointer-events-none ${
          navOpen ? 'opacity-75 duration-700' : 'opacity-0 duration-300'
        }`}
      />
    </>
  );
};

export default Header;

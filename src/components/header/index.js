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
        class={`fixed inset-x-0 top-0 z-20 py-4 px-8 transition-all duration-500 ${
          isScrolled || navOpen
            ? `text-neutral-900 shadow backdrop-blur ${
                !navOpen
                  ? 'bg-gradient-to-b from-neutral-50 to-neutral-50/75'
                  : 'bg-neutral-50'
              }`
            : 'bg-gradient-to-b from-neutral-50 via-neutral-50/75 to-neutral-50/0 text-neutral-900 shadow-none backdrop-blur-0'
        }`}>
        <header-wrapper class="mx-auto flex w-full flex-row justify-between gap-4 md:max-w-screen-xl md:items-center md:px-8">
          <nav class="hidden flex-shrink gap-4 md:flex md:w-1/3">
            {mainNavigation.map((item) => (
              <Link
                key={item.target}
                href={item.target}
                class="block min-w-[12ch] flex-none py-2 px-4 text-center uppercase transition-all hover:tracking-widest"
                activeClass="font-bold pointer-events-none">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            activeClass="pointer-events-none"
            class="flex-shrink-0 px-4 py-2 text-center font-goldenbook text-xl uppercase md:w-1/3 md:text-3xl">
            <h1>Claire Lee</h1>
          </Link>
          <MobileNav
            className="block md:w-1/3 md:opacity-0"
            navigation={mainNavigation}
            setOpen={setNavOpen}
          />
        </header-wrapper>
      </header>
      <div
        class={`pointer-events-none fixed inset-0 z-10 h-screen w-full bg-neutral-900 transition-opacity ${
          navOpen ? 'opacity-75 duration-700' : 'opacity-0 duration-300'
        }`}
      />
    </>
  );
};

export default Header;

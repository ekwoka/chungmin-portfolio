/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { CheckCircleIcon, MenuIcon } from '@heroicons/react/outline';
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';

const callsToAction = [
  { name: 'Contact', href: '#'},
  { name: 'View CV', href: '#'},
  { name: 'LinkedIn', href: '#'}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MobileNav({ className, setOpen, navigation }) {
  return (
    <Popover class="relative">
      {({ open, close }) => {
        useEffect(() => setOpen(open), [open]);
        return (
          <>
            <div class={className}>
              <Popover.Button class={classNames(open ? 'text-stone-500' : 'text-stone-900', 'py-2 px-4 inline-flex items-center')}>
                <MenuIcon class="w-6 h-6" />
              </Popover.Button>
            </div>

            <Transition as={Fragment} enter="transition duration-500" enterFrom="opacity-0 translate-x-2" enterTo="opacity-100 translate-x-0" leave="transition duration-500" leaveFrom="opacity-100 translate-x-0" leaveTo="opacity-0 translate-x-2">
              <Popover.Panel class="fixed inset-x-0 z-10 mt-5 shadow-lg transform">
                <div class="bg-stone-50 text-stone-900">
                  <div class="flex flex-col px-4 pb-6 mx-auto gap-y-2">
                    {navigation.map((item) => (
                      <Link key={item.label} href={item.target} class="block transition-all hover:tracking-widest min-w-[8ch] text-center py-2 px-4 text-2xl" activeClass="font-bold pointer-events-none" onClick={close}>
                      {item.label}
                    </Link>
                    ))}
                  </div>
                </div>
                <div class="border-t bg-stone-100 border-stone-200">
                  <div class="flex flex-col px-4 py-5 mx-auto gap-2 max-w-max">
                    {callsToAction.map((item) => (
                        <Link href={item.href} class="flex items-center text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                          <CheckCircleIcon class="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{item.name}</span>
                        </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
}

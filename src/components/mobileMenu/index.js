/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { CheckCircleIcon, MenuIcon } from '@heroicons/react/outline';
import { Link } from 'preact-router/match';
import { callsToAction } from '../../data/navigation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MobileNav({ className, setOpen, navigation }) {
  return (
    <Popover class="relative flex-shrink md:w-1/3">
      {({ open, close }) => {
        setOpen(open);
        return (
          <>
            <div class={className}>
              <Popover.Button
                class={classNames(
                  open ? 'text-neutral-500' : 'text-neutral-900',
                  'inline-flex items-center py-2 px-4'
                )}>
                <MenuIcon class="h-6 w-6" />
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition duration-500"
              enterFrom="opacity-0 translate-x-2"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-500"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-2">
              <Popover.Panel class="fixed -inset-x-2 z-10 mt-5 transform shadow-lg">
                <div class="bg-neutral-50 text-neutral-900">
                  <div class="mx-auto flex flex-col gap-y-4 px-4 py-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.label}
                        href={item.target}
                        class="block min-w-[8ch] py-2 px-4 text-center text-2xl uppercase tracking-wide transition-all hover:tracking-widest"
                        activeClass="font-bold"
                        onClick={close}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div class="border-t border-neutral-200 bg-neutral-100">
                  <div class="mx-auto flex max-w-max flex-col gap-2 px-4 py-5">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        class="flex items-center rounded-md text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-100">
                        <CheckCircleIcon
                          class="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
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

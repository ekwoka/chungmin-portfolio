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
    <Popover class="relative md:w-1/3 flex-shrink">
      {({ open, close }) => {
        setOpen(open);
        return (
          <>
            <div class={className}>
              <Popover.Button
                class={classNames(
                  open ? 'text-neutral-500' : 'text-neutral-900',
                  'py-2 px-4 inline-flex items-center'
                )}>
                <MenuIcon class="w-6 h-6" />
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
              <Popover.Panel class="fixed z-10 mt-5 shadow-lg -inset-x-2 transform">
                <div class="bg-neutral-50 text-neutral-900">
                  <div class="flex flex-col px-4 py-8 mx-auto gap-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.label}
                        href={item.target}
                        class="block transition-all tracking-wide hover:tracking-widest min-w-[8ch] text-center py-2 px-4 text-2xl"
                        activeClass="font-bold"
                        onClick={close}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div class="border-t bg-neutral-100 border-neutral-200">
                  <div class="flex flex-col px-4 py-5 mx-auto gap-2 max-w-max">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        class="flex items-center text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                        <CheckCircleIcon
                          class="flex-shrink-0 w-6 h-6 text-gray-400"
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

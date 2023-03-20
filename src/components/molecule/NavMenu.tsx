"use client"

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ComputerDesktopIcon, MoonIcon, SunIcon} from '@heroicons/react/20/solid'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function NavMenu() {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-inset ring-gray-300">
          <Bars3Icon className="h-5 w-5 text-black" aria-hidden="true"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#home"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm flex gap-2 items-center'
                  )}
                >
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#aboutme"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm flex gap-2 items-center'
                  )}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#projects"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm flex gap-2 items-center'
                  )}
                >
                  Projects
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#contact"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm flex gap-2 items-center'
                  )}
                >
                  Contact
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NavMenu
